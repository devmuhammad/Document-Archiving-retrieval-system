<template src="./addUser.html">
  
</template>

<script>
import { Validator } from 'vee-validate';
import {mapGetters, mapActions} from "vuex"
import FadeLoader from "../../../../../node_modules/vue-spinner/src/FadeLoader.vue"

export default {
  name:"addUser",
  props:['isActive','closeModal'],
  mounted: function () { return this.getUsers() },
  
  data () {
    return {

        user: {fullname: '', pissid:'', confirmpassword:'', emailaddress: '', phonenumber:'',
          adminusersGroupsList:[], profiletype:'', datecreated:new Date().toDateString()},
        loading:true,
        adminusersGroups: {emailaddress:'',groupname:''},
        checked:[]
    }
    
  },
  computed:{
    ...mapGetters({ 
      response_status:"create_userstatus"
    }),

  },
  methods: {
    ...mapActions([
      "getUsers",
      "createNewUser"
    ]),
    createNew(){ return this.createNewUser(this.user) },

  profilecheck(){
      
     
      for (let i=0; i < this.checked.length; i++ )
      {
        
        this.adminusersGroups.emailaddress=this.user.emailaddress
        this.adminusersGroups.groupname=this.checked[i]
        this.user.adminusersGroupsList.push(this.adminusersGroups)

        
         if ((this.checked[i] === 'Admin-School') && (this.checked[i] ==='User-School') &&
        (this.checked[i] === 'Admin-Consultant') && (this.checked[i] ==='User-Consultant') ){
       this.user.profiletype = "CONSULTANT"
      }
      else if((this.checked[i] == "Admin-Consultant") || (this.checked[i] == "User-Consultant")  ){
       
        this.user.profiletype = "CONSULTANT"
        
      }
      else if ((this.checked[i] === "Admin-School") || (this.checked[i] === "User-School") ){
        
        this.user.profiletype = "SCHOOL"
      }
      
      }
            return this.user.profiletype

    },

   clear(){
      return this.$store.commit("clearStatusLog")
    },
    
    validateBeforeSubmit() {
      this.$validator
        .validateAll()
        .then((result) => {
        if(!result){
        alert('error');
          return;
        }
        alert('success');
          
          // Validation success if response === true
        })
        .catch(function(e) {
          // Catch errors
        })
    }
  },
  components:{FadeLoader}
}
</script>