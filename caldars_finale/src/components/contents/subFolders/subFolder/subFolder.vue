<template src="./subFolder.html">
  
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import pdf from "vue-pdf";

export default {
  name: "subFolder",

  props:["document"], 

  data() {
    return {
      isAttr: false,
      src:"../../src/assets/intro-to-ethereum.pdf",
      selected: false,
      documentId: this.document.id,
      page: 1
    };
  },
  
  computed:{
    ...mapGetters ([
      'selectedDocs'
    ]),
    
  },
  
  methods:{
    showAttr(){ return this.isAttr = true},
    hideAttr(){ return this.isAttr = false},

getSelected(){
      
       if (this.selected){
         var found = this.selectedDocs.some(id => {
          return id === this.document.id;
        });
        if (!found) {
        this.selectedDocs.push(this.document);
      }
      
        //  for (let i=0; i<this.selectedDocs.length; i++){
           
        //    if (this.selectedDocs[i].id != this.document.id){
        //   this.selectedDocs.push(i,this.document)
        //    } 
        //    }
         
       }
       else if (!this.selected){
         
         for (let i=0; i< this.selectedDocs.length; i++){
           
           if (this.selectedDocs[i].id === this.document.id){
             
             this.selectedDocs.splice(i,1)
           }
         }
        
       }
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
