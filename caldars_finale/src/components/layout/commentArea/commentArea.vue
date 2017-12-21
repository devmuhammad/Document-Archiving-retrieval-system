<template src="./commentArea.html">
  
</template>

<script>
import comments from "@/components/contents/commentTab/comments";
import activities from "@/components/contents/activityTab/activities";
import {mapGetters} from 'vuex'

export default {
  name: "commentArea",
  data() {
    return {
      iscomActive: false,
      isActive: false,
      document_Footer: 50,
      comtag:0,
      acttag:0,
    };
  },

  computed:{
    ...mapGetters([
      "actlength",
      "comlength"
    ]),
  },
  
  methods: {
    setActive() {
      this.iscomActive = false;
      this.isActive = !this.isActive;
      return this.setHeight()
    },
    setcomActive() {
      this.isActive = false
      this.iscomActive = !this.iscomActive
      return this.setHeight()
    },
    setHeight() {
      if (this.iscomActive == true || this.isActive == true) {
        return this.document_Footer = 250;
      } else if (this.iscomActive == false || this.iscomActive == false) {
        return this.document_Footer = 50;
      }
    },
    
  },
  components: { comments, activities }
};
</script>
