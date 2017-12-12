import {HTTP} from "./http"

export default {
  getDocumentCategories: async () => {
    const res = () => {
      return new Promise((resolve, reject) => {
        HTTP.get('list/categories?page=0&size=10')
        .then(response => { resolve(response.data) })
        .catch(e => { reject(e) })
      })
    }

    return await res()
  },

  getCategoryList: async () => {
    console.log("reaching..")
    const res = () => {
      return new Promise((resolve, reject) => {
        HTTP.get('list/documentimages/master?page=0&size=9&search=NA')
        .then(response => { console.log(response);resolve(response.data) })
        .catch(e => { reject(e) })
      })
    }

    return await res()
  },

  getCategoryChild: async (parentId) => {
    const res = () => {
      return new Promise((resolve, reject) => {
        HTTP.get('category/'+parentId+'/detail')
        .then(response => {resolve(response.data) })
        .catch(e => { reject(e) })
      })
    }

    return await res()
  },

  addCategory: async (category) => {
    console.log(category)
    const res = () => {
      return new Promise((resolve, reject) => {
        HTTP.post('category/add', category)
        .then(response => {console.log(response); resolve(response.data) })
        .catch(e => { console.log(e); reject(e) })
      })
    }

    return await res()
  },
}
