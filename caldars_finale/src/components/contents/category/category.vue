<template src="./category.html">
  
</template>


<script>
import PulseLoader from "../../../../node_modules/vue-spinner/src/PulseLoader"

export default {
  name:"new_category",
  props:[
    'isNewCategoryActive',
    'closeNewCategory',
    'addCategory', 
    'newCategory',
    'reset',
    'loading'
  ],

  mounted(){ return this.$refs.category.focus() },
  
  components:{PulseLoader}
}
</script>
