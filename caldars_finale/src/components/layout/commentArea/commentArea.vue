<template src="./commentArea.html">
  
</template>

<script>
import comments from "@/components/contents/commentTab/comments";
import activities from "@/components/contents/activityTab/activities";

export default {
  name: "commentArea",
  data() {
    return {
      iscomActive: false,
      isActive: false,
      document_Footer: 50,
      data: [],
      busy: false
    };
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
    loadMore() {
      let count =0;
      this.busy = true;

      setTimeout(() => {
        for (let i = 0, j = 10; i < j; i++) {
          this.data.push({ name: count++ });
        }
        this.busy = false;
      }, 1000);
    }
  },
  components: { comments, activities }
};
</script>
