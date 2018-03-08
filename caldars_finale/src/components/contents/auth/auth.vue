<template src="./auth.html">
  
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "auth",
 created: function () { return this.getbusinesstypes([]) },
 mounted() { return this.typeWriter() },
data() {
    return {
      
      selected:'Business Type',
      userlog:{username:"",password:""},
      isLoading: false,
      usererror:"",
      logerror:"",
      logmsg:"",
      user: {
        userName: "",
        firstName: "Admin",
        middleName: "Admin",
        lastName: "Admin",
        password: "",
        contactEmail: "",
        contactMobile: "08000000001",
        enteredbyid:1,
        active:1,
        dateCreated: Date().now,
        institutionid: {
          name: "",
          contactperson: "",
          contactEmail: "",
          businesstypeid: {id:"" },
        },   
      },

      authbtns:true,
      signinForm:false,
      signupForm:false,
      i:0,
      txt:"Create an account and get up to 200MB free space...",
      demo:""
    }
  },

  computed: {
    ...mapGetters(
      ['businesstypes','create_instid','login_status','login_msg','login_error','create_usererror'],
      {response_status: "create_inststatus"},
    ),
  getStatus(){
      return (this.login_status==0) 
      ? this.isLoading = true
      : this.isLoading = false;
    },
  },
  watch: {
    dispmsg (){
      if (this.login_msg !== ""){
      this.logmsg = this.login_msg
      this.isLoading = false
      }
      if(this.login_error !== "" ){
        this.logerror = this.login_error.error
        this.isLoading = false
      }
      else this.logerror = " :( Please Check Network"
      this.isLoading = false
      // if (this.login_msg == ""){
      // this.error = this.login_error.error
      // }
      // else this.error =this.login_msg
      //  this.isLoading = false
    },
    signUpmsg() {
      if (this.create_usererror !== "") {
        this.usererror = this.create_usererror
        this.isLoading = false
      }
      else this.usererror = " :( Please Check Network"
      this.isLoading = false
    }
    
  },

  methods: {
    ...mapActions(["getUsers", "getbusinesstypes", "createNewUser", "createInstitution", "userLogin"]),

    createNew() {
       
    this.user.contactemail=this.user.institutionid.contactemail
      return this.createNewUser(this.user);
      this.isLoading = false
    },
    
    createNewInstitution() {
      this.user.institutionid.businesstypeid.id = this.selected
    return this.createInstitution(this.user.institutionid);
       
    },
    
    signUp(){
      this.isLoading = true
      if(this.user.userName == "" || this.user.password == ""){
        this.usererror = "You must fill all fields !";
        this.isLoading = false;
      }else{
      this.user.institutionid.businesstypeid.id = this.selected
      
      this.user.contactemail=this.user.institutionid.contactemail
      return this.createNewUser(this.user);
      
      }
    },
    login(){
      this.getStatus
      
      //setTimeout(this.isLoading, 2000)
      if(this.userlog.username == "" || this.userlog.password == ""){
        this.logerror = "You can't submit an empty form!";
        this.isLoading = false;
      }else{
        return this.userLogin(this.userlog);
      }
    },
    
    getSelected(){
       let values = this.businesstypes.map(function(o){return o.businesstypes.id })
       let index = values.indexOf(this.selected)
       this.selected = this.businesstypes[index].businesstype
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
  }
  }

</script>
