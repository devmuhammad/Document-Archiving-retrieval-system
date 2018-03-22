<template src="./subFolders.html">
  
</template>

<script>
import {mapGetters} from "vuex"
import subFolder from "./subFolder/subFolder"
import list from "./list/list"

export default {
  name:"subFolders",

  props:["categoryChildren", "isListType", "isFolderType", "createProject"],
  
  computed:{
    ...mapGetters(["selectedChildren"])
  },
  components:{subFolder, list}
}
</script>
