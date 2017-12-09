<<template src="./activities.html">
  
</template>

<script>
import {mapActions, mapState, mapGetters} from "vuex"
import infiniteScroll from 'vue-infinite-scroll'

export default {
  
  name:"activities",
  created: function () { return this.getActivities([]) },
  props:[
    
  ],
  data(){
    return {
      
    }
  },
  computed:{
    ...mapGetters([
      "activitylist"
    ]),

},
methods:{

  deleteActvty () { return this.DeleteActivity(this.id[0])},

...mapActions([
    "getActivities",
    "DeleteActivity"

    ])
}
}
</script>