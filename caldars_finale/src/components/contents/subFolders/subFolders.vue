<template src="./subFolders.html">
  
</template>

<script>
import {mapGetters} from "vuex"
import subFolder from "./subFolder/subFolder"
import list from "./list/list"

export default {
  name:"subFolders",
  props:["categoryChildren", "isListType", "isFolderType"],
  computed:{
    ...mapGetters(["selectedChildren"])
  },
  components:{subFolder, list}
}
</script>
