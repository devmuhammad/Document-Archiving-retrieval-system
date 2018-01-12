<template src="./user-card.html">
  
</template>


<script>
export default {
  name:"user-card",
  data () {
    return {
      showControl :false,
      sampleName:"umar abdullahi"
    }
  },
  methods:{
    displayControl () {
      this.showControl = !this.showControl
    }
  },
  filters:{
    getInitials: function(value){
      let initials = "";
      value = value.split(" ",2)
      for(let i =0;i<value.length;i++){
        initials += value[i].charAt(0)
        console.log(initials)
      }
      return initials.toUpperCase()
    }
  }
}
</script>
