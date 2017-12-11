<template src="./folder.html">
  
</template>

<script>
import {mapActions} from "vuex"

export default {
  name:"folder",
  props:["document"],
  data (){
    return {
      isAttr:false,
      selected:false
    }
  },
  methods:{
    ...mapActions({"getCategoryChild":"getCategoryChild"}),
    showAttr(){ return this.isAttr = true},
    hideAttr(){ return this.isAttr = false},
    getChild(){
      return this.getCategoryChild(this.document.id)
    }
  }
}
</script>
