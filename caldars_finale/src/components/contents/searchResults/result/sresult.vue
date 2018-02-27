<template src="./sresult.html">
  
</template>


<script>
export default {
  name:"sresult",

  props:["result"],

  computed:{
    formatDate(){
      let formated = new Date(this.result.datecreated).toDateString()
      formated = formated.replace(" ", ", ")
      return formated
    }
  }
}
</script>
