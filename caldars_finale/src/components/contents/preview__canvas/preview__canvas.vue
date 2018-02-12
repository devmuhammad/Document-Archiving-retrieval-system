<template src="./preview__canvas.html">
  
</template>


<script>
import pdf from "vue-pdf"
import max__preview from "./max__preview/max__preview"

export default {
  name:"preview__canvas",
  data () {
    return {
      src:"/src/assets/sh2017.pdf",
      page:1,
      maximize: false
    }
  },
  methods: {
    maximize_view() {
      this.maximize = true
    }
  },
  components : {pdf, max__preview}
}
</script>
