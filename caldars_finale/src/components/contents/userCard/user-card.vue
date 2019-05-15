<template src="./user-card.html">
  
</template>


<script>
import editUser from "@/components/contents/editUser/editUser"
import { mapActions } from 'vuex';
export default {
  name:"user-card",
  props:["user"],
  data () {
    return {
      status:"Active",
      showControl :false,
      // fullName: this.user.firstName + " " + this.user.lastName + " " + this.user.middleName,
      isEditUserModalActive:false,

    }
  },
  
  methods:{
    ...mapActions([
      'DeleteUser'
    ]),

    displayControl () {return this.showControl = true},
    closeControl () {return this.showControl = false},

    blockUser (){return this.status = "Blocked"},
    unblockUser(){return this.status = "Active"},
    openEditUserModal() {
      return this.isEditUserModalActive = true
    },
    
    async deleteUser(userid){
       
      let customButtons =   [
        {
          text:"Yes",
          onClick: () => { this.showScx(userid) }
        }
            ]

      new Toast({
        message: "Delete this User ?",
        type: 'danger',
        customButtons
            })

    },
    async showscx(userid){
      await this.DeleteUser(userid),

      new Toast({
        message: "User Deleted Successfully !",
        type: 'success'})  
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
