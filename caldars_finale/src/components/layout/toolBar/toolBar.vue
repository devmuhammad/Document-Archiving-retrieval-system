<template src="./toolBar.html">
  
</template>

<script>
import notifications from "@/components/contents/notifications/notifications"
import {documentPath} from "@/mixins/documentPath"
import uploadModal from "@/components/contents/upload/upload"
import {mapGetters} from "vuex"

export default {
  name:"toolBar",

  mounted(){ return this.checkRoute() },

  data () {
    return {
      routes:{
        dashboard: false,
        settings:false,
        users:false,
        documents:false,
        help:false,
        search: false
      },
      showNote:false,
      viewActions:false,
      setUploadActive:false
    }
  },

  watch:{
    '$route':'checkRoute',

    isSearchResultReady : function (val) {
      if (val === true) {
        this.routes = {dashboard: false,settings:false, users:false, documents:false, help:false, search: true}
      }else if(val === false || val === undefined){
        this.routes = {dashboard: false,settings:false, users:false, documents:true, help:false, search: false}
      }
    }
  },

  methods:{
    checkRoute () {
      let newRoutes = {dashboard: false,settings:false, users:false, documents:false, help:false, search: false}
      let curRoute = this.$route.path
      
      if(curRoute === '/documents'){
        newRoutes.documents = true
        this.routes = newRoutes
      }else if(curRoute === '/'){
        newRoutes.dashboard = true
        this.routes = newRoutes
      }else if(curRoute === '/users'){
        newRoutes.users = true
        this.routes = newRoutes
      }else if(curRoute === '/settings'){
        newRoutes.settings = true
        this.routes = newRoutes
      }else if(curRoute === '/help'){
        newRoutes.help = true
        this.routes = newRoutes
      }
    },

    displayActions () { this.viewActions = !this.viewActions; },

    displayUploadModal(){ return this.setUploadActive = true },

    closeModal(){ return this.setUploadActive = false }
  },

  computed : {
    ...mapGetters(["isSearchResultReady"])
  },

  components:{notifications, uploadModal},

  mixins:[documentPath]
}
</script>
