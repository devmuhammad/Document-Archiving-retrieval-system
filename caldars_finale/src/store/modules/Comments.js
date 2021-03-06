import api from "../../API/comments"

let state = {
    commentlist :[],
    comment: {},
    comlength:{},
    get_comerror: {},
    delete_error:{},
    create_error:{},
    create_commentstatus:undefined,
}

let getters = {
    commentlist : state => state.commentlist,
    get_comerror : state => state.get_comerror,
    comlength: (state) => state.comlength
}

let mutations = {
    getComments:  async (state,commentlist) => {
      try {
      const fetchComments = () => {
        return new Promise((resolve, reject) => {
          api.LIST_COMMENT(commentlist)
          .then((res) => { resolve(res) })
          .catch((err) => {  reject(err) })
        })  
        .then((res) => {
          state.commentlist = res
          state.comlength = res.length
          
        })
        .catch((err) => { console.log({'error':err.message}); state.get_comerror.error = err.message})
      }  
  
      return await fetchComments()
    } catch (error) {
      console.log({'error':error.message}); state.fetch_error.error = error.message
    }
    },

    addNewComment: async (state, comment) => {
      const create = () => {
        return new Promise ((resolve, reject) => {
          state.create_commentstatus = 0
        api.ADD_COMMENT(comment)
        .then((res) => { resolve(res)})
        .catch((err) => { reject(err) })
      })
      .then((res) => { state.create_commentstatus = res.status; this.LIST_COMMENT(0)})
      .catch((err) => {state.create_error.error = err.message})
    }

    return await create()
  },

    DeleteComment: (state, id) => {
        api.DELETE_COMMENT(id)
        .then((res) => { console.log(res); })
        .catch((err) => { state.delete_error.error = err.message })
      },
}

let actions = {
    getComments: ({commit}, commentlist) => commit('getComments', commentlist) ,
    DeleteComment: ({commit}, id) => commit('DeleteComment', id),
    addNewComment:({commit}, comment) => commit('addNewComment', comment)
}

export default {
    state,
    getters,
    actions,
    mutations
  }