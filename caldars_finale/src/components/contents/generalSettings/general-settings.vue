<template src="./general-settings.html">
  
</template>


<script>
import { mapGetters } from "vuex"
import api from '@/API/UserManagementAPI'

export default {
  name:"general-settings",
  props:['institution'],
  data () {
        return {
          docdir:"",
          arcdir:"",
        }
        },

  computed: {
    ...mapGetters({
      "user":"loggedInUser"
    })
  },

  mounted(){
    this.docdir = this.institution.fileurl
    this.arcdir = this.institution.backupurl
  },
  methods:{
    getfolder(e) {
    let files = e.target.files;
    let path = files[0].webkitRelativePath;
    let Folder = path.split("/");
    // alert(Folder[0]);
    this.docdir = Folder[0]
},
    getarcfolder(e) {
    let files = e.target.files;
    let path = files[0].webkitRelativePath;
    let Folder = path.split("/");
    // alert(Folder[0]);
    this.arcdir = Folder[0]
},
  async valdocPath(){
    this.institution.fileurl = this.docdir
    this.institution.datecreated =  Date.now()
    let docmsg;
    
    const fetch = () => {
        return api.UPDATE_FILEPATH(this.institution)
          .then(res => {
            // console.log(res)
            docmsg = res.data.message
            // this.projects = res.projects
          })
          .catch(err => {
            this.errorFetching = true
          })
      };

      await fetch()

      if(docmsg == "Success"){
         new Toast({
        message: "Success, Updated Successfully !",
        type: 'success',
            })
      }else new Toast({
        message: "OooOps, Unable to Update!",
        type: 'danger',
            })
  
  },

  async valbackupPath(){
    this.institution.backupurl = this.arcdir
     this.institution.datecreated = Date.now()
      let docmsg
    
    const fetch = () => {
        return api.UPDATE_FILEPATH(this.institution)
          .then(res => {
            // console.log(res)
           docmsg = res.data.message
            // this.projects = res.projects
          })
          .catch(err => {
            this.errorFetching = true
          })
      };

      await fetch()

      if(docmsg == "Success"){
         new Toast({
        message: "Success, Updated Successfully !",
        type: 'success',
            })
      }else new Toast({
        message: "OooOps, Unable to Update!",
        type: 'danger',
            })
  
  }
  
  }

}
</script>
