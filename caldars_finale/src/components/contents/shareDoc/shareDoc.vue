<template src="./shareDoc.html">
  
</template>


<script>
import {mapActions, mapState, mapGetters} from "vuex"

export default {
  name:"shareDoc",
  props:["isShareActive", "closeShareModal"],
  
  //created: function () { return this.getUsers([]) },
  mounted() { return this.getUsers([]) },
  data () {
    return {
      loading:false,
      dspmsg:false,
      dspform:true,
      selected:"",
      share: {
          status:0,
          comments:"",
          sharedby:"",
          tousername:"",
          touserid:"",
          dateshared:"",
          doctid:{id:""},
          userid:{id:""}
      }

    }
  },
  computed:{
    ...mapGetters([
      'userslist','loggedInUser','selectedDocs'
    ])
  },
  methods: {
       getSelected(){
       let values = this.userslist.map(id =>{return id })
       let index = values.indexOf(this.selected)
       this.selected = this.userslist[index]
    },
    
    shareFile(){
      this.share.touserid = this.selected
      this.share.userid.id= this.loggedInUser.id
      this.share.sharedby = this.loggedInUser.userName
      for (let i=0; i<=this.selectedDocs.length; i++){
      this.share.doctid = this.selectedDocs[i].id
      
    return this.shareDocuments(this.share)
      }
    },

    shareSim(){
      setTimeout(this.showSuccess, 2000)
    },
    showSuccess(){
      this.dspform=false
      this.dspmsg=true
      setTimeout(this.showForm, 5000)
    },
    showForm(){
      this.dspform=true
      this.dspmsg=false
    },

    ...mapActions([
      "getUsers","shareDocuments"
    ])
  }
}
</script>
