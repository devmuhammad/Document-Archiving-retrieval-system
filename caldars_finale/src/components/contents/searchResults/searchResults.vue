<template src="./searchResults.html">
  
</template>

<script>
import {mapGetters} from "vuex"
import sresultItem from "./result/sresult"

export default {
  name:"searchResults",
  
  computed:{ ...mapGetters(["searchResults"]) },

  components: {sresultItem}
}
</script>
