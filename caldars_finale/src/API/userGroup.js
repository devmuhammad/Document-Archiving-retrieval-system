import {userHTTP} from './http'

export default {
    CREATE_USERGROUP: async (usergroup) => {
        
        let groups = usergroup[0].groups
        
      const res = () => {
        return new Promise ((resolve, reject) => {
          
          userHTTP.post('users/group/add?groups='+groups)
          .then(response => { resolve(response.data) })
          .catch(e => { reject(e) })
        })
      }
      return await res()
    },
    
    addUserRole : async (groupresponse) => {
       
        const res = () => {
            return new Promise ((resolve, reject) => {
              
              userHTTP.post('users/groupsrole/add', groupresponse)
              .then(response => { resolve(response); new Toast({
                message: "Group Added Successfully !",
                type: 'success'})  })
              .catch(e => { reject(e) })
            })
          }
          return await res()
    },
    

    UPDATE_USERGROUP: async (user) => {
        const res = () => {
          return new Promise((resolve, reject) => {
            userHTTP.post(`users/group/update`, user)
            .then(response => { resolve(response) })
            .catch(e => { reject(e) })
          })
        }
  
        return await res()
      },

      DELETE_USERGROUP: async (id) => {
        const res = () => {
          return new Promise((resolve, reject) => {
            userHTTP.delete(`users/group/delete/` + id)
            .then(response => { resolve(response.data) })
            .catch(e => { reject(e) })
          })
        }
        
        return await res()
      },
  
      GET_USERGROUP: async (id) => {
        const res = () => {
          return new Promise((resolve, reject) => {
            userHTTP.get(`users/group/retrieve/`+id)
            .then(response => { resolve(response.data) })
            .catch(e => { reject(e) })
          })
        }
         
        return await res()
      },
  
      GET_USERGROUPS: async () => {
        const res = () => {
          return new Promise((resolve, reject) => {
            userHTTP.get(`users/group/list` )
            .then((response) => { resolve(response.data)  })
            .catch(e => { console.log(e); reject(e) })
          })
        }
  
        return await res()
      },

      GET_USERROLES: async () => {
        const res = () => {
          return new Promise((resolve, reject) => {
            userHTTP.get(`users/role/list` )
            .then((response) => { resolve(response.data)  })
            .catch(e => { console.log(e); reject(e) })
          })
        }
  
        return await res()
      },
}