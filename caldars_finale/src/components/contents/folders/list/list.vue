<template src="./list.html">
  
</template>

<script>
export default {
  name:"listType",
  props:["document"],
  computed:{
    formatDate(){
      let formated = new Date(this.document.datecreated).toDateString()
      formated = formated.replace(" ", ", ")
      return formated
    }
  }
}
</script>
