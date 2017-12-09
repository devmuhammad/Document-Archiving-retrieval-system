import API from "../../API/documentCategory"

let state = {
  listOfDocuments:[],
  get_error:{},
  addedCategory:{},
  add_error:{}
}

let getters = {
  listOfDocuments:(state) => {
    let allDocuments = state.listOfDocuments
    let docs = []
    for(let i =0;i<10;i++){
      if(allDocuments.length > 0){
        docs.push(allDocuments[i])
      }
    }
    return docs
  }
}

let mutations = {
  getDocumentCategory: (state) => {
    const getList = () => {
      return new Promise ((resolve, reject) => {
        API.LIST()
          .then((res) => { resolve(res)})
          .catch((err) => { reject(err) })
      })
      .then((res) => { state.listOfDocuments = res })
      .catch((err) => {state.get_error.error = err.message; console.log(err)})
    }

    return getList()
  },

  update_added_category: () => {
    return true
  }
}

let actions = {
  getDocumentCategory: ({commit}) => commit("getDocumentCategory"),
  update_added_category: ({commit}, new_category) => commit("update_added_category", new_category)
}

export default {
  state,
  getters,
  mutations,
  actions
}