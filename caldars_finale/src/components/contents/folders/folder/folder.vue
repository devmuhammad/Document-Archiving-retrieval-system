<template src="./folder.html">
  
</template>

<script>
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
    showAttr(){ return this.isAttr = true},
    hideAttr(){ return this.isAttr = false}
  }
}
</script>
