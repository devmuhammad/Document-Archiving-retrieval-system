<template src="./userManagementTableItem.html">
  
</template>

<script>
  import updateUser from "@/components/views/users/updateUserForm/updateUser"


export default {
  name:"userManagementTableItem",
  props:[
    'username',
    'firstname',
    'middlename',
    'lastname',
    'emailaddress',
    'phonenumber',
    'datecreated',
    'password',
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