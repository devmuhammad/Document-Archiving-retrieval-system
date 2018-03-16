<template src="./users.html">
  
</template>

<script>
import userCard from "@/components/contents/userCard/user-card"
import addUser from "@/components/contents/newUser/new-user"
import userActivities from "@/components/contents/userActivities/userActivities"
import roleManager from "@/components/contents/roleManager/roleManager"
import {mapActions, mapState, mapGetters} from "vuex"

export default {
  name:"users",
  created: function () { return this.getUsers() },
  data () {
    return {
      displayUserActivities: false,
      displayRoleManager:false,
      displayUserCard:true,
      isAddUserModalActive:false,
      tab:""
    }
  },
    computed:{
    ...mapGetters([
      'userslist'
    ]),
  },
  methods:{
    openNewUserModal() {
      return this.isAddUserModalActive = true
    },

    closeNewUserModal () {
      return this.isAddUserModalActive = false
    },
    changeRoleManager(){
      this.tab = "Role Manager"
      this.displayRoleManager = true
      this.displayUserActivities = false
      this.displayUserCard = false
    },
    changeUserActivities(){
      this.tab = "User Activities"
      this.displayUserActivities = true
      this.displayRoleManager = false
       this.displayUserCard = false
    },
    changeUserCard(){
      this.tab = "Users"
      this.displayUserCard = true
      this.displayRoleManager = false
      this.displayUserActivities = false
    },


  ...mapActions([
      "getUsers",
      "DeleteUser",
    ])
  },
  components: {
    userCard,
    addUser,
    userActivities,
    roleManager
  }

}
</script>
