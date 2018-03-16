<template src="./user-card.html">
  
</template>


<script>
export default {
  name:"user-card",
  props:["user"],
  data () {
    return {
      showControl :false,
      fullName: this.user.firstName + " " + this.user.lastName + " " + this.user.middleName
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
      }
      return initials.toUpperCase()
    }
  }
}
</script>
