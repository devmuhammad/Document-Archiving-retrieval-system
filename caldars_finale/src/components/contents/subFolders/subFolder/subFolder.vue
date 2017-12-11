<template src="./subFolder.html">
  
</template>

<script>
export default {
  name:"subFolder",

  props:["document"], 

  data() {
    return {
      isAttr:false,
      selected:false
    }
  },

  methods:{
    showAttr(){ return this.isAttr = true},
    hideAttr(){ return this.isAttr = false},
  }
}
</script>
