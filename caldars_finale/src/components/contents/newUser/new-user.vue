<template src="./new-user.html">
  
</template>


<script>
import {mapGetters, mapActions} from "vuex";

export default {
  name: "new-user",

  props: [
    "isNewUserModalActive", 
    "closeNewUserModal"
  ],

  data () {
    return {
      loading:false,
      fullname: "",
      pass: "",
      cpass: "",
      error:"",
      newUser: {
        userName: "",
        password: "",
        firstName: "",
        middleName: "",
        lastName: "",
        contactMobile: "",
        contactEmail: "",
        dateCreated: Date.now(),
        enteredbyid: "",
        institutionid: {
          name: "",
          contactperson: "",
          contactemail: "",
          contactphone: "",
          weburl: "",
          businesstypeid: {
            id: "",
          }  
        }    
      }
    }
  },

  computed: {
    ...mapGetters([
      "loggedInUser",
      "create_usererror",
      "create_userstatus"
    ]),
  },

  methods: {
    ...mapActions([
      "createNewUser"
    ]),

    createUser() {
      if(this.pass === this.cpass && this.pass !== "" && this.cpass !== "")
      {
        let nUser = this.newUser
        let instid = nUser.institutionid
        let binessid = instid.businesstypeid
        nUser.firstName = this.fullname.split(" ", 3)[0]
        nUser.middleName = this.fullname.split(" ", 3)[1]
        nUser.lastName = this.fullname.split(" ", 3)[2]
        nUser.password = this.pass
        nUser.enteredbyid = this.loggedInUser.enteredbyid
        instid.name = this.loggedInUser.institutionid.name
        instid.contactperson = this.loggedInUser.institutionid.contactperson
        instid.contactemail = this.loggedInUser.institutionid.contactemail
        instid.contactphone = this.newUser.contactMobile
        instid.weburl = this.loggedInUser.institutionid.contactemail
        binessid.id = this.loggedInUser.institutionid.businesstypeid.id
        //console.log(nUser)
        return this.createNewUser(this.newUser)
      }else {
        this.error = "Passwords do not match!"
      }
      
    }
  },

  watch: {
    create_usererror: function(value) {
      if(value !== null){
        this.error = value
      }
    },

    cpass: function(value) {
      if(value !== this.pass){
        this.error = "Passwords do not match!"
      }else {
        this.error = ""
      }
    },

    pass: function(value) {
      if(this.cpass !== "" && value !== this.cpass){
        this.error = "Passwords do not match!"
      }else {
        this.error = ""
      }
    }
  }
}
</script>
