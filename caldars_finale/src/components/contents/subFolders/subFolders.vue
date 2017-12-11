<template src="./subFolders.html">
  
</template>

<script>
import {mapGetters} from "vuex"
import subFolder from "./subFolder/subFolder"

export default {
  name:"subFolders",
  computed:{
    ...mapGetters(["categoryChildren"])
  },
  components:{subFolder}
}
</script>
