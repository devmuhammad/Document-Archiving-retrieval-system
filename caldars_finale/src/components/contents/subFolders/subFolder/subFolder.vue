<template src="./subFolder.html">
  
</template>

<script>
import {mapActions} from "vuex"

export default {
  name:"subFolder",

  props:["document"], 

  data() {
    return {
      isAttr:false,
      selected:false,
    }
  },

  methods:{
    showAttr(){ return this.isAttr = true},
    hideAttr(){ return this.isAttr = false},

    ...mapActions([
    "getComments",
    "getActivities",
    "displayFileContents"
    ]),
  }
}
</script>
