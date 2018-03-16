<template src="./search.html">
  
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
  name:"Search",

  data() {
    return {
      searchKeyword: null,
      error: undefined,
      isSearching: null
    }
  },

  methods : {
    ...mapActions(["search"]),

    searchFor() {
      let keyw = this.searchKeyword

      if(keyw !== "" && keyw !== null){
        this.isSearching = true
        this.search( keyw )
      }else {
        this.error = "Search field can't be empty!"; 
      }
    }
  },

  computed : {
    ...mapGetters([
      "searchError", 
      "isSearchResultReady"
    ])
  },

  watch : {
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
      return val === undefined 
      ? this.isSearching = false 
      : this.isSearching = !val;
    }
  }
}
</script>
