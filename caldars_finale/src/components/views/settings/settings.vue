<template src="./settings.html">
  
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex"
import accountSettings from "@/components/contents/accountSettings/account-settings"
import generalSettings from "@/components/contents/generalSettings/general-settings"
import api from '@/API/UserManagementAPI'

export default {
  name:"Settings",
  data () {
    return {
      isProfileSettings:true,
      isGeneralSettings:false,
      confPass:"",
      errorFetching:false,
      error:"",
      institution:{},
      user: {
          oldPass:"",
          newPass:""
      }
    }
  },
  computed: {
    ...mapGetters ([
      'create_passwordstatus',
      'changepasserr'
    ]),
  },

  mounted(){
    this.getInstitution();
    
  },

  methods:{

    changePass(){
      this.error=""
      if (this.confPass==="" || this.user.newPass==="" || this.user.oldPass===""){
        this.error="Input all fields"
      }
      else if(this.confPass === this.user.newPass ){
     return this.changeuserpassword(this.user)
     this.error= this.changepasserr
      }
      else this.error="Passwords do not match"
    },
    showProfileSettings () {
      this.isGeneralSettings = false
      return this.isProfileSettings = true
    },
    showGeneralSettings () {
      this.isProfileSettings = false
      return this.isGeneralSettings = true
    },

    getInstitution(){
      
      const fetch = () => {
        return api.GET_INSTITUTIONS()
          .then(res => {
            // console.log(res)
            this.institution = res.data
            // this.projects = res.projects
          })
          .catch(err => {
            this.errorFetching = true
          })
      };

      return fetch()

    },

    ...mapActions([
    "changeuserpassword",
    ]),
  },
  components:{
    accountSettings,
    generalSettings
  }
}
</script>
