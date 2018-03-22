<template src="./user-card.html">
  
</template>


<script>
import editUser from "@/components/contents/editUser/editUser"
export default {
  name:"user-card",
  props:["user"],
  data () {
    return {
      status:"Active",
      showControl :false,
      fullName: this.user.firstName + " " + this.user.lastName + " " + this.user.middleName,
      isEditUserModalActive:false,

    }
  },
  methods:{
    displayControl () {return this.showControl = true},
    closeControl () {return this.showControl = false},

    blockUser (){return this.status = "Blocked"},
    unblockUser(){return this.status = "Active"},
    openEditUserModal() {
      return this.isEditUserModalActive = true
    },

    closeEditUserModal () {
      return this.isEditUserModalActive = false
    },

  },
  filters:{
    getInitials: function(value){
      let initials = "";
      value = value.split(" ",2)
      for(let i =0;i<value.length;i++){
        initials += value[i].charAt(0)
      }
      return initials.toUpperCase()
    }
  },
  components: {
    editUser,
  }
}
</script>
