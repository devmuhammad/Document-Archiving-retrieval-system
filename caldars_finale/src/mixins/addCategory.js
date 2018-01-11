import {mapGetters, mapActions} from "vuex"
import API from "../API/documentCategory"

export const addCategory = {
  data(){
    return {
      new_category:{
        documentType: "New Category",
        dateCreated: "2017-12-09",
        parentid: 0,
        haschild: 0,
        active: 1
      },
      isNewCategoryActive:false,
      isLoading:false
    }
  },
  methods:{
    reset(){
      this.isNewCategoryActive = false;
      this.isLoading = false 
      this.new_category.documentType = "New Category"
    },

    openCategoryModal(){
      return this.isNewCategoryActive = true
    },

    closeCategoryModal(){
      return this.reset()
    },

    notify(data,status){
      let success_msg = " "+"has been created successfully, you can start uploading your files now!"
      let error_msg = "oOPps!"+" "

      new Toast({
        message: (status === "success") ? data + success_msg : error_msg + data,
        type: (status === "success") ? 'success':'danger'
      })
    },

    create_new_category(){
      if(this.new_category.documentType != "" && this.new_category.documentType != "New Category"){
        this.isLoading = true;
        
        const addCategory = () => {
          return new Promise ((resolve, reject) => {
            API.addCategory(this.new_category)
              .then((res) => { resolve(res)})
              .catch((err) => { reject(err) })
          })
          .then((res) => { 
            this.reset()
            return this.notify(res.documentType,"success") 
          })
          .catch((err) => { 
            this.isLoading = false
            return this.notify(err.message, "error") 
          })
        }
    
        return addCategory()
      }
    }
  }
}