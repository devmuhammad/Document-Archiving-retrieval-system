<template src="./general-settings.html">
  
</template>


<script>
import { mapGetters } from "vuex"

export default {
  name:"general-settings",
  computed: {
    ...mapGetters({
      "user":"loggedInUser"
    })
  }
}
</script>
