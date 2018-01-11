<template src="./users.html">
  
</template>

<script>
import userCard from "@/components/contents/userCard/user-card"
import addUser from "@/components/contents/newUser/new-user"

export default {
  name:"users",
  data () {
    return {
      users:6,
      isAddUserModalActive:false
    }
  },
  methods:{
    openNewUserModal() {
      return this.isAddUserModalActive = true
    },

    closeNewUserModal () {
      return this.isAddUserModalActive = false
    }
  },
  components: {
    userCard,
    addUser
  }

}
</script>
