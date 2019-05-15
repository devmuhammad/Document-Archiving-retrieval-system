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
      addComp:0,
      fullname: "",
      pass: "",
      cpass: "",
      error:"",
      groupselected:"",
      newUser: {
        username: "",
        password: "",
        fullname:"",
        status:true,
        roletypes:"",
        phone: "",
        supervisor: 0,
        contactemail: "",
        dateCreated: Date.now(),
        groups: [],
        institutionid: {
          id:"",
          name: "",
          licenceid: "",
          logoname: "",
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
      "usergroups",
      "create_usererror",
      "create_userstatus"
    ]),
  },
  mounted(){
    this.getUsergroups()
  },
  methods: {
    ...mapActions([
      "createNewUser",
      "getUsergroups"
    ]),


    async createUser() {
      if(this.pass === this.cpass && this.pass !== "" && this.cpass !== "")
      {
        let nUser = this.newUser
        let instid = nUser.institutionid
        let binessid = instid.businesstypeid
        nUser.fullname = this.fullname
        nUser.password = this.pass
        nUser.groups.push(this.groupselected)
        nUser.supervisor = this.loggedInUser.id
        instid.name = this.loggedInUser.institution.name
        instid.contactperson = this.loggedInUser.institution.contactperson
        instid.contactemail = this.loggedInUser.institution.contactemail
        instid.contactphone = this.loggedInUser.institution.contactphone
        instid.weburl = this.loggedInUser.institution.weburl
        binessid.id = this.loggedInUser.institution.businesstypeid.id
        //console.log(nUser)
       await this.createNewUser(this.newUser)
       if (this.create_userstatus) {
          new Toast({
        message: "Success, Created user !",
        type: 'success',
            })
         this.closeNewUserModal();
         this.addComp++
       }else this.error = "Unable to create User, please try again !"
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
