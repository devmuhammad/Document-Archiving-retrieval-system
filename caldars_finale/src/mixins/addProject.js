import {mapGetters, mapActions} from "vuex"
import API from "../API/documentCategory"

export const addProject = {
  data () {
    return {
      project: {
        "id": 1,
        "fileregisterId": "232",
        "filenumber": "987",
        "filename": "",
        "volumeno": 231,
        "barcode": "453bdc",
        "closed": true,
        "dateclosed": "2018-02-01",
        "closedby": "admin",
        "filecover": "del.pdf",
        "enteredBy": "admin",
        "active": 1,
        "userid": 2,
        "filecategoryId": {
          "id": 1,
          "categoryCode": "DD211",
          "fileCategoryName": "Promotion"
        }
      },

      isProjectModalActive:false,
      isProjectLoading:false
    }
  },

  methods:{
    resetProject(){
      this.isProjectModalActive = false;
      this.isProjectLoading = false 
      this.project.filename = ""
    },

    openProjectModal(){
      return this.isProjectModalActive = true
    },

    closeProjectModal(){
      return this.resetProject()
    },

    notify_me(data,status){
      let success_msg = " "+"project has been created successfully"
      let error_msg = "oOPps!"+" "

      new Toast({
        message: (status === "success") ? data + success_msg : error_msg + data,
        type: (status === "success") ? 'success':'danger'
      })
    },

    create_new_project(){
      if(this.project.filename != "" ){
        this.isProjectLoading = true;
        
        const addProject = () => {
          return new Promise ((resolve, reject) => {
            API.createProject(this.project)
              .then((res) => { resolve(res)})
              .catch((err) => { reject(err) })
          })
          .then((res) => { 
            this.notify_me(this.project.filename + res.id,"success")
            return this.resetProject()
          })
          .catch((err) => { 
            this.isProjectLoading = false
            return this.notify_me(err.message, "error") 
          })
        }
    
        return addProject()
      }
    }
  }
}