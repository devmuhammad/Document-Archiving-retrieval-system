<template src="./folder.html">
  
</template>

<script>
import {mapActions} from "vuex"

export default {
  name:"folder",
  props:["document","selected"],
  data (){
    return {
      isAttr:false
    }
  },
  methods:{
    ...mapActions({"getCategoryChild":"getCategoryChild"}),
    showAttr(){ return this.isAttr = true},
    hideAttr(){ return this.isAttr = false},
    getChild(){
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
  computed:{
    selectFolder : {
      set : function(val) {
        if (val === true) {
          return true
        }else{
          return false
        }
      },

      get : function(val) {
        if (this.selected === true) {
          return true
        }else{
          return false
        }
      }
    }
  }
}
</script>
