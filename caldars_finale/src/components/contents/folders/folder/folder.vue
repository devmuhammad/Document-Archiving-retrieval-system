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
      allSelected:false
    }
  },

  methods:{
    ...mapActions({"getCategoryChild":"getCategoryChild", "unselect":"unselectAll"}),
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
  }

}
</script>
