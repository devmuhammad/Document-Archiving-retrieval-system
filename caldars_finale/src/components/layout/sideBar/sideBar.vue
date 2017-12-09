<template src="./sideBar.html">
  
</template>


<script>
export default {
  name:"Sidebar",
  mounted:function () { return this.changeActiveRoute() },
  data () {
    return {
      activeRoute:{
        dashActive:false,
        documentActive:false,
        settingsActive:false,
        usersActive:false,
        helpActive:false
      }
    }
  },
  watch: {
    $route:"changeActiveRoute"
  },
  methods:{
    changeActiveRoute(){
      let newState = {dashActive:false, documentActive:false, settingsActive:false, usersActive:false, helpActive:false}
      let curPath = window.location.pathname.split("/",4)[1]

      switch("/"+curPath){
        case "/":
          newState.dashActive = true
          this.activeRoute = newState
          break;
        case "/documents":  
          newState.documentActive = true
          this.activeRoute = newState
          break;
        case "/settings":
          newState.settingsActive = true
          this.activeRoute = newState
          break  
        case "/users":
          newState.usersActive = true
          this.activeRoute = newState
          break;
        case "/help":
          newState.helpActive = true
          this.activeRoute = newState
          break;   
      }
    }
  }
}
</script>
