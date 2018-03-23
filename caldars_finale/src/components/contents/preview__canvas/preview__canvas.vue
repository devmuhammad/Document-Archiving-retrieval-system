<template src="./preview__canvas.html">
  
</template>


<script>
import pdf from "vue-pdf"
import max__preview from "./max__preview/max__preview"

export default {
  name:"preview__canvas",
  data () {
    return {
      src:"/src/assets/intro-to-ethereum.pdf",
      page:1,
      maximize: false
    }
  },

  methods: {
    maximize_view () {
      return this.maximize = true
    },

    minimize_view () {
      this.maximize = false;
    }
  },

  components : {pdf, max__preview}
}
</script>
