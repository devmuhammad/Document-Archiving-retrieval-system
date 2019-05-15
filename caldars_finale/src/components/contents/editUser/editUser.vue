<template src="./editUser.html">
  
</template>


<script>
import {mapGetters, mapActions} from "vuex";

export default {
  name: "editUser",

  props: [
    "isEditUserModalActive", 
    "closeEditUserModal",
    "user"
  ],

  data () {
    return {
      loading:false,
      newName:"",
      fullName: this.user.firstName + " " + this.user.lastName + " " + this.user.middleName,
      pass: "",
      cpass: "",
      error:"",
      selected:"",
      newUser: {
       username: "",
        password: "",
        fullname:"",
        status:true,
        roletypes:"Initiator",
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
      "create_usererror",
      "create_userstatus",
      "create_updatestatus",
      "usergroups"
    ]),
  },
 mounted(){
    this.getUsergroups()
    this.setDetails();
  },
  methods: {
    ...mapActions([
      "createNewUser",
      "getUsergroups",
      "updateoldUser"
    ]),

    setDetails(){
      this.newUser.fullname = this.user.fullname,
      this.newUser.username = this.user.username,
      this.newUser.contactemail = this.user.contactemail
      this.newUser.phone = this.user.phone
      // this.selected = this.user.groups[0]
    },
    async updateUser() {
      if(this.pass === this.cpass && this.pass !== "" && this.cpass !== "")
      {
        let nUser = this.newUser
        let instid = nUser.institutionid
        let binessid = instid.businesstypeid
        nUser.fullname = this.fullname
        nUser.password = this.pass
        nUser.groups.push(this.selected)
        // nUser.supervisor = this.loggedInUser.id
        // instid.name = this.loggedInUser.institution.name
        // instid.contactperson = this.loggedInUser.institution.contactperson
        // instid.contactemail = this.loggedInUser.institution.contactemail
        // instid.contactphone = this.loggedInUser.institution.contactphone
        // instid.weburl = this.loggedInUser.institution.weburl
        // binessid.id = this.loggedInUser.institution.businesstypeid.id
        //console.log(nUser)
       await this.updateoldUser(this.newUser)
       if (this.create_updatestatus) {
          new Toast({
        message: "Success, Updated User!",
        type: 'success',
            })
         this.closeEditUserModal();
       }else this.error = "Unable to update User, please try again !"
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
