<template src="./folders.html">
  
</template>

<script>
import folder from "./folder/folder"
import list from "./list/list"
import {mapGetters, mapActions} from "vuex"

export default {
  name:"folders",
  props:["isListType", "isFolderType"],

  data () {
    return {
      isAttr:false,
      folderType:false
    }
  },

  computed:{
    ...mapGetters(["listOfDocuments", "categoryDetails"]),

    /**isDocument(){
      console.log(this.listOfDocuments)
      return (this.listOfDocuments.length) ? 10:10
    },*/
  },

  components:{folder,list}
}
</script>
