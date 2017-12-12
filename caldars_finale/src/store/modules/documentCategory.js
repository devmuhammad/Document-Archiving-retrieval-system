import API from "../../API/documentCategory"

let state = {
  listOfDocuments:[],
  get_error:{},
  addedCategory:{},
  add_error:{},
  documentCategories:undefined,
  categoryChildren: null
}

let getters = {
  listOfDocuments:(state) => state.listOfDocuments,
  categoryDetails: (state) => state.documentCategories,
  categoryChildren: (state) => state.categoryChildren
}

let mutations = {
  getDocumentCategory: (state) => {
    const getList = () => {
      return new Promise ((resolve, reject) => {
        API.LIST()
          .then((res) => { resolve(res)})
          .catch((err) => { reject(err) })
      })
      .then((res) => { 
        state.categoryChildren = null
        state.documentCategories = res
        state.listOfDocuments = res.categories
      })
      .catch((err) => {state.get_error.error = err.message; console.log(err)})
    }

    return getList()
  },

  getCategoryChild: (state, parentId) => {
    const getChild = () => {
      return new Promise ((resolve, reject) => {
        API.getCategoryChild(parentId)
          .then((res) => { resolve(res)})
          .catch((err) => { reject(err) })
      })
      .then((res) => { 
        //state.documentCategories = res
        state.categoryChildren = res.documentimageList
      })
      .catch((err) => {state.get_error.error = err.message; console.log(err)})
    }

    return getChild()
  },

  setSubFoldersNull:(state) => {
    return state.categoryChildren = null
  }
}

let actions = {
  getDocumentCategory: ({commit}) => commit("getDocumentCategory"),
  getCategoryChild: ({commit}, parentId) => commit("getCategoryChild", parentId),
  setSubFoldersNull: ({commit}) => commit("setSubFoldersNull")
}

export default {
  state,
  getters,
  mutations,
  actions
}