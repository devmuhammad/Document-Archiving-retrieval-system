import {mapGetters, mapActions} from "vuex"
import API from "../API/documentCategory"

export const addCategory = {
  data(){
    return {
      new_category:{
        documentType: "New Category",
        dateCreated: new Date().toUTCString(),
        parentid: 0,
        haschild: 0,
        active: 1
      },
      isNewCategoryActive:false
    }
  },
  methods:{
    openCategoryModal(){
      return this.isNewCategoryActive = true
    },

    closeCategoryModal(){
      return this.isNewCategoryActive = false
    },

    notify(data,status){
      let success_msg = " "+"has been created successfully, you can start uploading your files now!"
      let error_msg = " "+"oOPps!"

      new Toast({
        message: (status === "success") ? data + success_msg : error_msg + data,
        type: (status === "success") ? 'success':'danger'
      })
    },

    create_new_category(){
      if(this.new_category.documentType != ""){
console.log("adding...")
        const addCategory = (category) => {
          return new Promise ((resolve, reject) => {
            API.addCategory(category)
              .then((res) => { resolve(res)})
              .catch((err) => { reject(err) })
          })
          .then((res) => { return this.notify(res.documentType,"success") })
          .catch((err) => { return this.notify(err.message, "error") })
        }
    
        return addCategory()
      }
    }
  }
}