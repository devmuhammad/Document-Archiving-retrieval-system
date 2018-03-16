<template src="./account-settings.html">
  
</template>


<script>
import Switches from 'vue-switches';
import {mapGetters} from "vuex"

export default {
  name:"account-settings",
  data () {
    return {
      enable:true,
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
