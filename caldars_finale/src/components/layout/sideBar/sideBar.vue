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
        accountActive:false,
        settingsActive:false,
        budgetActive:false,
        transactActive:false,
        usersActive:false,
        reportActive:false
      }
    }
  },
  watch: {
    $route:"changeActiveRoute"
  },
  methods:{
    changeActiveRoute(){
      let newState = {dashActive:false, accountActive:false, settingsActive:false, budgetActive:false, transactActive:false, usersActive:false, reportActive:false}
      let curPath = window.location.pathname.split("/",4)[1]

      switch("/"+curPath){
        case "/":
          newState.dashActive = true
          this.activeRoute = newState
          break;
        case "/documents":  
          newState.accountActive = true
          this.activeRoute = newState
          break;
        case "/settings":
          newState.settingsActive = true
          this.activeRoute = newState
          break  
        case "/users":
          newState.budgetActive = true
          this.activeRoute = newState
          break;
        case "/transactions":
          newState.transactActive = true
          this.activeRoute = newState
          break;
        case "/users":
          newState.usersActive = true
          this.activeRoute = newState
          break;
        case "/reports":
          newState.reportActive = true
          this.activeRoute = newState
          break      
      }
    }
  }
}
</script>
