<template src="./documentTable.html"> 

</template>

<script>
import documentItem from "./documentItem/documentItem"

export default {
  name:"documentTable",
  mounted(){
    $('.collapsible').collapsible();
  },
  data () {
    return {
      documents:[
        {"name":"JavaScript for dummies"},
        {"name":"You Don't Know JavaScript"},
        {"name":"Sever-side rendering"},
        {"name":"State house budget"}
      ]
    }
  },  
  components:{documentItem}
};
</script>

