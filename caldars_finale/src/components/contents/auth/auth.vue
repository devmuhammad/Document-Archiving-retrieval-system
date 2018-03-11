<template src="./auth.html">
  
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "auth",
  mounted() { console.log(this.$isOnline); return this.typeWriter() },
  data() {
    return {
      login_deet:{
        "username":"",
        "passw":""
      },
      signinErr: "",
      user: {
        userName: "",
        firstName: "Admin",
        middleName: "Admin",
        lastName: "Admin",
        password: "",
        contactEmail: "",
        contactMobile: "08000000001",
        institutionid: {
          id: "",
          name: "",
          contactperson: "",
          contactEmail: "",
          businesstypeid: { id: "" },
          datecreated: new Date().toDateString()
        },
        datecreated: new Date().toDateString()
      },

      authbtns:true,
      signinForm:false,
      signupForm:false,
      i:0,
      txt:"A safe and fast way of managing your files .....",
      demo:""
    }
  },

  computed: {
    ...mapGetters({
      "response_status": "create_inststatus",
      "isLogging": "login_status",
      "login_error": "login_error"
    })
  },

  methods: {
    ...mapActions([
      "getUsers", 
      "createNewUser", 
      "createInstitution", 
      "userLogin"
    ]),

    tryLogin () {
      let credentials = this.login_deet

      if(credentials.username !== "" && credentials.passw !== ""){
        this.signinErr = null
        return this.userLogin(credentials)
      }else {
        this.signinErr = "Please fill in your login credentials!"
      }
    },

    createNew() {
      return this.createNewUser(this.user);
    },
    
    createNewInstitution() {
      return this.createInstitution(this.user.institutionid);
    },

    openSigninForm(){
      this.authbtns = false;
      this.signupForm = false;
      this.signinForm = true;
    },

    openSignupForm(){
      this.authbtns = false;
      this.signinForm = false;
      this.signupForm = true;
    },

    closeForms(){
      this.authbtns = true;
      this.signinForm = false;
      this.signupForm = false;
    },


    typeWriter() {
      if (this.i < this.txt.length) {
        this.demo += this.txt.charAt(this.i);
        this.i++;
        setTimeout(this.typeWriter, 200);
      }
      this.resetCursor()
    },

    resetCursor() {
      if(this.demo === this.txt){
        this.demo = ""
        this.i = 0;
      }
    }
  },

  watch: {
    login_error : function (value) {
      if(value !== null) {
        this.signinErr = value
      }
    }
  }
};
</script>