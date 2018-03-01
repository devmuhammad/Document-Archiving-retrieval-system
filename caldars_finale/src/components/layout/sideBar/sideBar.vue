<template src="./sideBar.html">
  
</template>


<script>
import {mapGetters, mapActions} from "vuex";

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
      },
      searchKeyword: null,
      error: undefined,
      isSearching: null
    }
  },
  methods:{
    ...mapActions(["search"]),

    searchFor() {
      this.isSearching = true
      let keyw = this.searchKeyword

      const search = () => {
        this.search( keyw ) 
        if(this.$route.path !== "/documents"){
          this.$router.push("/documents")
        }
      }

      return keyw !== "" 
      ? search()
      : this.error = "Search field can't be empty!"; this.isSearching = true;
    },

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
  },
  computed : {
    ...mapGetters(["searchError", "isSearchResultReady"])
  },
  watch : {
    $route:"changeActiveRoute", 

    searchKeyword : function (val) {
      let keyw = val

      return keyw !== "" 
      ? this.error = null
      : this.error = "Search field can't be empty!"
    },

    searchError : function (err) {

      return err === null
      ? null
      : this.error = err
    },

    isSearchResultReady : function (val) {
      console.log(!val)
      return val === undefined ? this.isSearching = false : this.isSearching = !val;
    }
  }
}
</script>
