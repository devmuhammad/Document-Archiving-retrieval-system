<template src="./commentArea.html">
  
</template>

<script>
import comments from "@/components/contents/commentTab/comments"
import activities from "@/components/contents/activityTab/activities"


export default {
  name:"commentArea",
  data () {
    return {
      activeTab: "",
      iscomActive:true,
      isActive:false,
      document_Footer:300,
      
    }
  },
  methods:{
    checkActive(){
       this.iscomActive =  !this.iscomActive;
       this.isActive = !this.isActive
      
    },
  },
  components:{comments,activities}
}
</script>
