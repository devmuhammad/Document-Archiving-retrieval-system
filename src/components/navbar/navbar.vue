<template src="./navbar.html">
  
</template>

<script>
export default {
  name:"Navbar",
  props:["offCanvas","toggle"],
  mounted() {$(".dropdown-button").dropdown();}
}
</script>
