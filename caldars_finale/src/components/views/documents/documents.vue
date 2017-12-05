<template src="./documents.html">
  
</template>

<script>
import commentArea from "@/components/layout/commentArea/commentArea"
import folders from "@/components/contents/folders/folders"
import search from "@/components/contents/search/search"
import pagination from "@/components/contents/pagination/pagination"

export default {
  name:"documents",
  data () {
    return {
      documents:14
    }
  },
  components:{commentArea, folders, search,pagination}
}
</script>
