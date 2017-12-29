<template src="./auth.html">
  
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "auth",

  data() {
    return {
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
      signupForm:false
    }
  },

  computed: {
    ...mapGetters({
      response_status: "create_inststatus"
    })
  },

  methods: {
    ...mapActions(["getUsers", "createNewUser", "createInstitution", "userLogin"]),

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
    }
  }
};
</script>