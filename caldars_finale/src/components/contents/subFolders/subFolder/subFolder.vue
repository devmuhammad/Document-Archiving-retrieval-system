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

getSelected(){
      
       if (this.selected){
         for (let i=0; i<this.selectedDocs.length; i++){
           let value = this.selectedDocs[i]
           if (value === this.document.id){

           }
           else if (value !== this.document.id){
             this.selectedDocs.push(this.document)
           }
         }
       }
       else if (!this.selected){
         for (let i=0; i<this.selectedDocs.length; i++){
           let value = this.selectedDocs[i]
           if (value === this.document.id){
             this.selectedDocs.splice(this.document)
           }
           else if (value !== this.document.id){
             
           }
         }
       }
  },
//   checkAndAdd(){
//   //let id = this.selectedDocs.length + 1;
//   this.selectedDocs.some(id => {
//     return id === this.document.id
//   })
//    { this.selectedDocs.push(this.document) }
// },
  
   getDocument(){ this.documentId= this.document.id

    this.$store.commit(this.documentId)
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
