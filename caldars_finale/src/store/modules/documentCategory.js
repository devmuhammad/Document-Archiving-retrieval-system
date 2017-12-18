import API from "../../API/documentCategory"

let state = {
  categoriesOfDocuments:[],
  categoryList:[],
  get_error:{},
  addedCategory:{},
  add_error:{},
  documentCategoryDetails:undefined,
  categoryChildren: null,
  selectedChildren:null
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
  }
}

let mutations = {
  getDocumentCategory: (state,page_num) => {
    const getList = () => {
      return new Promise ((resolve, reject) => {
        API.getDocumentCategories(page_num)
          .then((res) => { resolve(res)})
          .catch((err) => { reject(err) })
      })
      .then((res) => { 
        state.categoryChildren = null
        state.documentCategoryDetails = res
        state.categoriesOfDocuments = res.categories
      })
      .catch((err) => {
        state.get_error.error = err.message; 
        console.log(err)
      })
    }

    return getList()
  },

  getCategoryChild: (state, parentId) => {
    for(let i=0;i<state.categoriesOfDocuments.length;i++){
      const category = state.categoriesOfDocuments[i]
      if(category.id == parentId){
        state.selectedChildren = category.documentimageList
        state.categoryChildren = true
      }
    }
  },

  getCategoryList: (state, page_num) => {
    const getList = () => {
      return new Promise((resolve, reject) => {
        API.getCategoryList(page_num)
          .then((res) => { resolve(res) })
          .catch((err) => { reject(err) })
      })
      .then((res) => {
        state.categoryList = res.documentslist
      })
      .catch((err) => {
        state.get_error.error = err.message;
      })
    }

    return getList()
  },

  setSubFoldersNull:(state) => {
    return state.categoryChildren = null
  }
}

let actions = {
  getDocumentCategory: ({commit}, page_num) => commit("getDocumentCategory", page_num),
  getCategoryChild: ({commit}, parentId) => commit("getCategoryChild", parentId),
  setSubFoldersNull: ({commit}) => commit("setSubFoldersNull"),
  getCategoryList: ({commit}, page_num) => commit("getCategoryList", page_num)
}

export default {
  state,
  getters,
  mutations,
  actions
}