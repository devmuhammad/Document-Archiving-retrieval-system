<template src="./subFolder.html">
  
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import pdf from "vue-pdf";

export default {
  name: "subFolder",

  props: ["document"],

  data() {
    return {
      isAttr: false,
      src:"../../src/assets/intro-to-ethereum.pdf",
      selected: false,
      documentId: 0,
      page: 1
    };
  },

  computed: {
    ...mapGetters(["selectedDocs"])
  },

  methods: {
    showAttr() {
      return (this.isAttr = true);
    },
    hideAttr() {
      return (this.isAttr = false);
    },

    checkAndAdd() {
      //let id = this.selectedDocs.length + 1;
      if (
        this.selectedDocs.some(id => {
          return id === this.document.id;
        })
      ) {
        this.selectedDocs.push(this.document);
      }
    },

    getSelected() {
      if (this.selected) {
        this.checkAndAdd;
      }

      if (!this.selected) {
        this.selectedDocs.splice(this.document.id);
      }
    },

    getDocument() {
      this.documentId = this.document.id;

      this.$store.commit(this.documentId);
    },

    ...mapActions([
      "getComments", 
      "getActivities", 
      "displayFileContents"
    ])
  },

  components: {
    pdf
  }
};
</script>
