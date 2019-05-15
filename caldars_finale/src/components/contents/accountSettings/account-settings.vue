<template src="./account-settings.html">
  
</template>


<script>
import Switches from 'vue-switches';
import {mapGetters} from "vuex"

export default {
  name:"account-settings",
  props:['institution'],
  data () {
    return {
      enable:true,
      enable_mail:true,
      enable_arc:true,
      disableInputs:true
    }
  },
  computed : {
    ...mapGetters({
      user:"loggedInUser"
    })
  },
  components:{Switches}
}
</script>
