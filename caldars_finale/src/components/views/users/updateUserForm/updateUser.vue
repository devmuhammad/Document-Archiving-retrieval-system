<template src="./updateUser.html">
  
</template>

<script>
import {mapGetters, mapActions} from "vuex"
import FadeLoader from "../../../../../node_modules/vue-spinner/src/FadeLoader.vue"

export default {
  name:"updateUser",
  props:['isActive','closeModal','userid','fullname','emailaddress','phonenumber'],
  mounted: function () { return this.getUsers() },
  data () {
    
   return {
     
        user: { userid:this.userid , username:'', contactEmail:'', contactMobile: '', password:'', confirmpassword:'',
              adminusersGroupsList:[],},
        loading:true,
        adminusersGroups: {emailaddress:'',groupname:''},
        checked:[]
    }
    // fullname = this.user.fullname,
    // emailaddress = this.user.emailaddress,
    // phonenumber = this.user.phonenumber
    
  },
  computed:{
    ...mapGetters({ 
      response_status: "create_updatestatus"
    }),
    
  }, 
  methods: {
    ...mapActions([
      "getUsers",
      "updateoldUser"
    ]),

    updateUser(){ return this.updateoldUser(this.user) },

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
      return this.$store.commit("clearUpdateStatusLog")
    },



  },
  components:{FadeLoader}
}
</script>