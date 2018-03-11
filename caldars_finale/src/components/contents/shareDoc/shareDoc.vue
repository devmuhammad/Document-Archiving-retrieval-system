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
      'userslist','loggedInUser','loggedInUsername','selectedDocs'
    ])
  },
  methods: {
       getSelected(){
       let values = this.userslist.map(id =>{return id })
       let index = values.indexOf(this.selected)
       this.selected = this.userslist[index].userName
    },
    
    shareFile(){
      this.share.userid.id= this.loggedInUser
      this.share.sharedby = this.loggedInUsername
      for (let i=0; i<=this.selectedDocs.length; i++){
      this.share.doctid = this.selectedDocs[i].id
      
    return this.shareDocuments(this.share)
      }
    },

    ...mapActions([
      "getUsers","shareDocuments"
    ])
  }
}
</script>
