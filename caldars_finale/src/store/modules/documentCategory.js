import API from "../../API/documentCategory"

let state = {
  categoriesOfDocuments:[],
  categoryList:[],
  get_error:{},
  addedCategory:{},
  add_error:{},
  documentCategoryDetails:undefined,
  categoryChildren: null,
  selectedChildren:null,
  paginating:false,
  selectAllStatus:false,
  dir__stack: new Array (),
  file_opened: false
}

let getters = {
  categoriesOfDocuments:(state) => state.categoriesOfDocuments,
  listOfCategories: (state) => state.categoryList,
  categoryChildren: (state) => state.categoryChildren,
  selectedChildren: (state) => state.selectedChildren,
  categoryDetails: (state) => {
    return (state.documentCategoryDetails !== undefined) ?
    {
      last:state.documentCategoryDetails.last,
      first:state.documentCategoryDetails.first,
      page_num:state.documentCategoryDetails.page
    } : undefined
  },
  paginating: (state) => state.paginating,
  selectAllStatus: (state) => state.selectAllStatus,
  dir__stack: (state) => state.dir__stack,
  file_opened: (state) => state.file_opened
}

let mutations = {
  getDocumentCategory: (state,page_num) => {
    const getList = () => {
      return new Promise ((resolve, reject) => {
        if(page_num >= 0){ state.paginating = true}
        API.getDocumentCategories(page_num)
          .then((res) => { resolve(res)})
          .catch((err) => { reject(err) })
      })
      .then((res) => { 
        state.categoryChildren = null
        state.documentCategoryDetails = res
        state.categoriesOfDocuments = res.categories
        state.paginating = false
      })
      .catch((err) => {
        state.get_error.error = err.message; 
        state.paginating = false
        console.log(err)
      })
    }

    return getList()
  },

  getCategoryChild: (state, parentId) => {
    for(let i=0;i<state.categoriesOfDocuments.length;i++){
      const category = state.categoriesOfDocuments[i]

      if(category.id == parentId){
        state.selectedChildren = category.documentimageList;
        state.categoryChildren = true;
        state.dir__stack.push({
          'path':category.documentType,
          'isActive':true
        });
      }

    }
  },

  getCategoryList: (state, page_num) => {
    const getList = () => {
      return new Promise((resolve, reject) => {
        if(page_num >= 0){ state.paginating = true}
        API.getCategoryList(page_num)
          .then((res) => { resolve(res) })
          .catch((err) => { reject(err) })
      })
      .then((res) => {
        state.categoryList = res.documentslist
        state.paginating = false
      })
      .catch((err) => {
        state.get_error.error = err.message;
        state.paginating = false
      })
    }

    return getList()
  },

  setSubFoldersNull:(state) => {
    let stack__length = state.dir__stack.length;
    state.categoryChildren = null

    for(let i= 0; i < stack__length; i++){
      state.dir__stack.pop()
    }

    return (state.file_opened === true) ? state.file_opened = false : null;
  },

  doSelectAll : (state, data) => {
    return state.selectAllStatus = data.select
  },

  unselectAll : (state, data) => {
    return state.selectAllStatus = data.select
  },

  displayFileContents: (state, selectedFile) => {
    if(state.dir__stack.length >= 1){
      state.dir__stack.forEach(path => {
        path.isActive = false
      });

      state.dir__stack.push({
        'path':selectedFile.prvwname,
        'isActive':true
      });

      state.file_opened = true
    }
  },

  changeDirectory (state, pathIndex) {
    if(pathIndex !== 1){
      state.file_opened = false
      state.dir__stack.pop()

      state.dir__stack.forEach((path, index) => {
        if(index+1 !== state.dir__stack.length){
          path.isActive = false
        }else {
          path.isActive = true
        }
      });
      
    }else {
      return;
    }
  }
}

let actions = {
  getDocumentCategory: ({commit}, page_num) => commit("getDocumentCategory", page_num),
  getCategoryChild: ({commit}, parentId) => commit("getCategoryChild", parentId),
  setSubFoldersNull: ({commit}) => commit("setSubFoldersNull"),
  getCategoryList: ({commit}, page_num) => commit("getCategoryList", page_num),
  doSelectAll: ({commit}, data) => commit("doSelectAll", data),
  unselectAll: ({commit},data) => commit("unselectAll", data),
  displayFileContents: ({commit}, selectedFile) => commit("displayFileContents", selectedFile),
  changeDirectory: ({commit}, pathIndex) => commit("changeDirectory", pathIndex)
}

export default {
  state,
  getters,
  mutations,
  actions
}