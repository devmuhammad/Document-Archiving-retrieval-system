<template src="./folder.html">
  
</template>

<script>
import {mapActions} from "vuex"

export default {
  name:"folder",
  props:["document","selected"],
  data (){
    return {
      isAttr:false,
      allSelected:false,
      id_location: undefined
    }
  },

  methods:{
    ...mapActions({
      "getCategoryChild":"getCategoryChild", 
      "unselect":"unselectAll",
      "logId": "storeSelectedDocumentIds",
      "removeID": "removeIdFromStore"
    }),

    showAttr(){ return this.isAttr = true},
    hideAttr(){ return this.isAttr = false},
    getChild(){
      this.unselect({"select":false})
      return this.getCategoryChild(this.document.id)
    }
  },

  filters: {
    formatDate: function (value) {
      if (!value) return ''
      value = new Date(value).toDateString()
      value = value.replace(" ", ", ")
      return value
    }
  },

  watch:{
    selected: function (val) {
      if (val === true) {
        return this.allSelected = true
      }else{
        return this.allSelected = false
      }
    },

    allSelected: function (val) {
      if(val === true) {
        return this.logId({
          "id":this.document.id, 
          "title":this.document.documentType
        })
      }else if(val === false) {
        return this.removeID({
          "id":this.document.id, 
          "title":this.document.documentType
        })
      }
    }
  }

}
</script>
