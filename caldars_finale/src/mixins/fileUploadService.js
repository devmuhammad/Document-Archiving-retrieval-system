import { acuitydrive } from './acuityUploader'
import API from "../API/documentCategory"
import {mapActions} from "vuex"
const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3;

export const uploadService = {
  mounted() {
    this.reset();
  },

  data() {
    return {
      uploadedFiles: null,
      notUploadedFiles: null,
      currentStatus: null,
      uploadFieldName: 'acuitydrive',
      retrying:false,
      finishedSaving: false
    }
  },

  computed: {
    isInitial() {
      return this.currentStatus === STATUS_INITIAL;
    },
    isSaving() {
      return this.currentStatus === STATUS_SAVING;
    },
    isSuccess() {
      return this.currentStatus === STATUS_SUCCESS;
    },
    isFailed() {
      return this.currentStatus === STATUS_FAILED;
    },
    isDone() {
      return this.currentStatus === STATUS_SUCCESS;
    },
    allFiles(){
      return this.uploadedFiles.concat( this.notUploadedFiles )
    }
  },

  methods: {
    ...mapActions(["getDocumentCategory","getCategoryList"]),

    reset() {
      // reset form to initial state
      this.currentStatus = STATUS_INITIAL;
      this.uploadedFiles = [];
      this.notUploadedFiles = [];
      this.finishedSaving = false
    },

    saveFiles(fileList) {
      // upload data to the server
      this.currentStatus = STATUS_SAVING;

      acuitydrive.upload(fileList)
        .then(res => {
          res.forEach(result => {
            switch(result.code) {
              case 200:
                result.status = "success"
                this.uploadedFiles.push(result);
                break;
              case 503:
                result.status = "failed"
                this.notUploadedFiles.push(result);
                break;
            }
          })
          
          this.currentStatus = STATUS_SUCCESS;
        })
        .catch(err => {
          console.log(err)
          this.uploadError = err.response;
          this.currentStatus = STATUS_FAILED;
        });
    },

    filesChange(fieldName, fileList) {
      if (!fileList.length) return;
      
      // else save it
      this.saveFiles(fileList);
    },

    fetchCategories() {
      const fetch = () => {
        return API.getCategoryAndProject()
          .then(res => {
            this.allCategories = res.categories
            this.projects = res.projects
          })
          .catch(err => {
            this.errorFetching = true
          })
      };

      return fetch()
    },

    RETRY_FAILED(){
      this.retrying = true;

      return acuitydrive.Retry(this.notUploadedFiles)
        .then(res => {
          this.notUploadedFiles = [] 

          res.forEach(result => {
            switch(result.code) {
              case 200:
                result.status = "success"
                this.uploadedFiles.push(result);
                break;
              case 503:
                result.status = "failed"
                this.notUploadedFiles.push(result);
                break;
            }
          })
          
          this.retrying = false;
          
        })
        .catch(err => {
          console.log(err)
          this.uploadError = err.response;
          this.currentStatus = STATUS_FAILED;
        });
    },

    resetForm(){
      this.categoryType=undefined;
      this.projectType=undefined;
      this.desc="";
      this.createdBy="";
      this.filesList=undefined;
    },

    SAVE_FILE_PROP () {
      const documentImg = {
        "isuploaded": 1,
        "prvwname": this.filesList,
        "description": this.desc,
        "receivedfrom": this.createdBy,
        "userid": 1,
        "datecreated": "2018-02-27",
        "lastmodified": "2018-02-27",
        "parentid": {"id": this.projectType},
        "doctypeId" : {"id": this.categoryType}
      }

      this.isSavingProps = true;
      return acuitydrive.saveDocument(documentImg)
        .then(res => {
          let savedFile = res.data.prvwname

          switch(res.code) {
            case 200:
              this.isSavingProps = false
              this.SEND_NOTIFICATION(savedFile + " was saved successfully!", 'success')
              this.DROP_FILE(savedFile)
              return (this.uploadedFiles.length > 0) ? this.resetForm() : this.finishedSaving = true;
              break;
            case 500:
              this.isSavingProps = false
              this.SEND_NOTIFICATION(documentImg.prvwname + " could not be saved, try again!", 'danger')
              break;
          }
        })
        .catch(err => {
          console.log(err)
          this.isSavingProps = false
          this.SEND_NOTIFICATION(documentImg.prvwname + " could not be saved try again!", 'danger')
        })
    },

    SEND_NOTIFICATION(message,status){
      new Toast({
        message: message,
        type: (status === "success") ? 'success':'danger'
      });
    },

    DROP_FILE(filename) {
      let successfullUploads = this.uploadedFiles
      for(let i = 0; i < successfullUploads.length; i++){
        if(successfullUploads[i].data.name === filename){
          successfullUploads.splice(i,1)
        }
      }
    }

  },

  watch : {
    finishedSaving : function(val) {
      if(val === false){
        return;
      }else if(val === true){
        this.resetForm()
        this.getDocumentCategory()
        this.getCategoryList(0)
      }
    }
  }
}