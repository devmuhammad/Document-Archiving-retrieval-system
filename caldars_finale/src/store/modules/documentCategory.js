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
  categoryDetails: (state) => state.documentCategoryDetails,
  categoryChildren: (state) => state.categoryChildren,
  selectedChildren: (state) => state.selectedChildren
}

let mutations = {
  getDocumentCategory: (state) => {
    const getList = () => {
      return new Promise ((resolve, reject) => {
        API.getDocumentCategories()
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
      console.log("this is the problem")
      const category = state.categoriesOfDocuments[i]
      if(category.id == parentId){
        state.selectedChildren = category.documentimageList
        state.categoryChildren = true
        console.log("whats the problem")
      }
    }
 
  },

  getCategoryList: (state) => {
    console.log("getting..")
    const getList = () => {
      return new Promise((resolve, reject) => {
        API.getCategoryList()
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
  getDocumentCategory: ({commit}) => commit("getDocumentCategory"),
  getCategoryChild: ({commit}, parentId) => commit("getCategoryChild", parentId),
  setSubFoldersNull: ({commit}) => commit("setSubFoldersNull"),
  getCategoryList: ({commit}) => commit("getCategoryList")
}

export default {
  state,
  getters,
  mutations,
  actions
}