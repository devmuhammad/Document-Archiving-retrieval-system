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
  methods:{
    Delete(){
      new Toast({
        message: 'Are you sure you want to delete "Proposal and 3 other documents"?',
        type: 'danger',
        customButtons:[
          {
            text:"Yes",
            onClick:function confirmDelete(){
              return true;
            }
          }
        ]
      })
    }
  },
  components:{commentArea, folders, search,pagination}
}
</script>
