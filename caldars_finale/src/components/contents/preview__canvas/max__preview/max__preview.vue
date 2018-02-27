<template src="./max__preview.html">
  
</template>


<script>
import pdf from "vue-pdf"

export default {
  name:"max__preview",
  props:["src", "pageNum", "isMaximized", "closePreview"],
  components:{pdf}
}
</script>
