<template src="./userActivities.html">
  
</template>

<script>
import userActivitiesTableItem from "@/components/contents/userActivities/userActivitiesTableItem/userActivitiesTableItem"
import {mapActions, mapState, mapGetters} from "vuex"
import FadeLoader from "../../../../node_modules/vue-spinner/src/FadeLoader.vue"

export default {
name: "userActivities",
  data () {
    return {
      loading : true,
    useract: true,
    useractivities:2
    }   
  },
  components: {userActivitiesTableItem, FadeLoader}
}

</script>