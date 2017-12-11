<template src="./list.html">
  
</template>

<script>
export default {
  name:"listType",
  props:["document"],
  computed:{
    formatDate(){
      return new Date(this.document.dateCreated).toDateString()
    }
  }
}
</script>
