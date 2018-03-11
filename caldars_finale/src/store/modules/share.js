import api from "../../API/share"

let state = {
    create_shareerror :"",
    create_sharestatus :""
}
const getters = {
    
    create_sharestatus : state => state.create_sharestatus,
    create_shareerror : state => state.create_shareerror
}

const mutations = {
shareDocuments: async (state, share) => {
    const shareDocs = () => {
      return new Promise ((resolve, reject) => {
        state.create_sharestatus = 0
      api.SHARE(share)
      .then((res) => { resolve(res)})
      .catch((err) => { reject(err) })
    })
    .then((res) => { state.create_sharestatus = res.status})
    .catch((err) => {state.create_shareerror.error = err.message})
  }

  return await shareDocs()
},
}
const actions = {
    shareDocuments: ({ commit }, share) => commit('shareDocuments', share)
  }
  
  export default {
      state,
      getters,
      actions,
      mutations
  }