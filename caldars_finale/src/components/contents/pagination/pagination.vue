<template src="./pagination.html">
  
</template>


<script>
import {mapActions, mapGetters} from "vuex"

export default {
  name:"pagination",
  computed:{
    ...mapGetters(["categoryDetails"]),
    pageInfo(){ 
      return (this.categoryDetails !== undefined) ? this.categoryDetails:undefined
    }  
  },
  
  methods:{
    ...mapActions(["getDocumentCategory","getCategoryList"]),

    next(){
      let page = this.pageInfo.page_num
      this.getDocumentCategory(page+1)
      this.getCategoryList(page+1)
    },

    prev(){
      let page = this.pageInfo.page_num
      this.getDocumentCategory(page-1)
      this.getCategoryList(page-1)
    }
  }
}
</script>
