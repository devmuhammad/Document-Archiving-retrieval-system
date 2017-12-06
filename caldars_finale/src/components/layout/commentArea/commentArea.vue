<template src="./commentArea.html">
  
</template>

<script>
import comments from "@/components/contents/commentTab/comments"
import activities from "@/components/contents/activityTab/activities"


export default {
  name:"commentArea",
  data () {
    return {
      activeTab: "comments",
      iscomActive:true,
      isActive:false,
      document_Footer:50,
      overflow:null
    }
  },
  
    
  methods:{
    setActive(){
      this.iscomActive=false
      this.isActive = !this.isActive
       
    },
    setcomActive(){
      this.isActive=false
      this.iscomActive = !this.iscomActive
    },
      comheight(){
        if (this.iscomActive == true || this.isActive == true ){
          return this.document_Footer=300
          return this.overflow = scroll
        }
     else if (this.iscomActive == false || this.iscomActive == false ){
        return this.document_Footer=50
        return this.overflow = null
      }
    
  },
    
  },
  components:{comments,activities}
}
</script>
