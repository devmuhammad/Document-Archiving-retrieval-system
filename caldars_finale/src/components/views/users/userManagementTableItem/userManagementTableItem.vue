<template src="./userManagementTableItem.html">
  
</template>

<script>
  import updateUser from "@/components/views/users/updateUserForm/updateUser"


export default {
  name:"userManagementTableItem",
  props:[
    'userid',
    'fullname',
    'emailaddress',
    'phonenumber',
    'datecreated',
    'pissid',
    'confirmpassword',
    'lastlogin', 
    'checkbox', 
    'userid',
    'isSelected',
    
  ],
  data () {
    return {
      isActive:false
    }
  },
  methods: {
    closeModal() {this.isActive = !this.isActive}
  },
  components: {updateUser}
}
</script>