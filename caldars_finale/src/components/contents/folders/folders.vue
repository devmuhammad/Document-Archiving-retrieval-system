<template src="./folders.html">
  
</template>

<script>
import folder from "./folder/folder"
import {mapGetters, mapActions} from "vuex"
export default {
  name:"folders",
  data () {
    return {
      isAttr:false
    }
  },
  computed:{
    ...mapGetters(["listOfDocuments"]),
    isDocument(){
      return this.listOfDocuments.length
    }
  },
  components:{folder}
}
</script>
