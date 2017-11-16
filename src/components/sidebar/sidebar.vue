<template src="./sidebar.html">
  
</template>


<script>
export default {
  name:"Sidebar",
  props:["fixed"],
  mounted:function () { 
    
    return this.changeActiveRoute() 
  },
  data () {
    return {
      activeRoute:{
        dashActive:false,
        accountActive:false,
        settingsActive:false,
        documentsActive:false,
        archiveActive:false
      }
    }
  },
  watch: {
    $route:"changeActiveRoute"
  },
  methods:{
    show(){
      $('.button-collapse').sideNav('show');
    },
    changeActiveRoute(){
      let newState = {dashActive:false, accountActive:false, settingsActive:false, documentsActive:false, archiveActive:false}
      let curPath = window.location.pathname.split("/",4)[1]

      switch("/"+curPath){
        case "/":
          newState.dashActive = true
          this.activeRoute = newState
          console.log(newState)
          break;
        case "/useraccount":  
          newState.accountActive = true
          this.activeRoute = newState
          break;
        case "/settings":
          newState.settingsActive = true
          this.activeRoute = newState
          break  
        case "/documents":
          newState.budgetActive = true
          this.activeRoute = newState
          break;
        case "/archive":
          newState.transactActive = true
          this.activeRoute = newState
          break;  
      }
    }
  }
}
</script>
