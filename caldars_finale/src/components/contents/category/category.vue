<template src="./category.html">
  
</template>


<script>
import {FadeLoader} from "../../../../node_modules/vue-spinner/src/FadeLoader"

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
  mounted(){ return this.$refs.category.focus() }
}
</script>
