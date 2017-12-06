<template src="./toolBar.html">
  
</template>

<script>
import notifications from "@/components/contents/notifications/notifications"

export default {
  name:"toolBar",
  mounted(){ return this.checkRoute() },
  data () {
    return {
      routes:{
        dashboard: false,
        settings:false,
        users:false,
        documents:false
      },
      showNote:false
    }
  },
  watch:{
    '$route':'checkRoute'
  },
  methods:{
    checkRoute () {
      let newRoutes = {dashboard: false,settings:false, users:false, documents:false}
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
      }
    }
  },
  components:{notifications}
}
</script>
