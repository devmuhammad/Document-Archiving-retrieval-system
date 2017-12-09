<template src="./category.html">
  
</template>


<script>
export default {
  name:"new_category",
  props:['isNewCategoryActive','closeNewCategory','addCategory', 'newCategory'],
  mounted(){
    return this.$refs.category.focus()
  }
}
</script>
