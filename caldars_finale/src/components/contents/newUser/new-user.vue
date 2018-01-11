<template src="./new-user.html">
  
</template>


<script>
export default {
  name:"new-user",
  props:["isNewUserModalActive", "closeNewUserModal"],
  data () {
    return {
      loading:false
    }
  }
}
</script>
