import {HTTP} from "./http"

export default {
  getDocumentCategories: async (page_num = 0, size = 10) => {
    const res = () => {
      return new Promise((resolve, reject) => {
        HTTP.get('list/categories?page='+page_num+'&size='+size)
        .then(response => { resolve(response.data) })
        .catch(e => { reject(e) })
      })
    }

    return await res()
  },

  getCategoryList: async (page_num = 0) => {
    const res = () => {
      return new Promise((resolve, reject) => {
        HTTP.get('list/documentimages/master?page='+page_num+'&size=9&search=NA')
        .then(response => { resolve(response.data) })
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
    const res = () => {
      return new Promise((resolve, reject) => {
        HTTP.post('category/add', category)
        .then(response => { resolve(response.data) })
        .catch(e => { reject(e) })
      })
    }

    return await res()
  },

  createProject: async (project) => {
    const res = () => {
      return new Promise((resolve, reject) => {
        HTTP.post('project/add', project)
        .then(response => { resolve(response.data) })
        .catch(e => { reject(e) })
      })
    }

    return await res()
  },

  uploadFile : async (file) => {
    const res = () => {
      return new Promise((resolve, reject) => {
        const config = { headers: { 'Content-Type': 'multipart/form-data' }}

        HTTP.post('upload', file, config)
        .then(response => { 
          const res = {"message":response.data, "code":200, "error":null}
          resolve(res) 
        })
        .catch(e => { 
          const res = {"error":true, "debug":e}
          reject(res) 
        })
      })
    }

    return await res()
  },

  getCategoryAndProject : async () => {
    const res = () => {
      return new Promise((resolve, reject) => {
        HTTP.get('list/categoryandproject')
        .then(response => { resolve(response.data) })
        .catch(e => { reject(e) })
      })
    }

    return await res()
  },

  saveFileDetails: async (imageProps) => {
    const res = () => {
      return new Promise((resolve, reject) => {
        HTTP.post('documentimage/add', imageProps)
        .then(response => {console.log(response); resolve(response.data) })
        .catch(e => { console.log({"e":e}); reject(e) })
      })
    }

    return await res()
  },

  search: async (keyword) => {
    const endpoint = "list/documentimages/masters?page=0&size=9&search=previewname:"+keyword;

    const res = () => {
      return new Promise((resolve, reject) => {
        HTTP.get(endpoint)
        .then(response => {resolve(response.data) })
        .catch(e => { reject(e) })
      })
    }

    return await res()
  },
}
