<<template src="./activities.html">
  
</template>

<script>
import {mapActions, mapState, mapGetters} from "vuex"
import {infiniteScroll} from '../../../../node_modules/vue-infinite-scroll'

export default {
  
  name:"activities",
  
  data(){
    return {
      id:2,
      data: [],
      busy: false
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
    
    "DeleteActivity"

    ]),

loadMore() {
      let count =0;
      this.busy = true;

      setTimeout(() => {
        for (let i = 0, j = 10; i < j; i++) {
          this.data.push({ name: count++ });
        }
        this.busy = false;
      }, 1000);
    }
}
}
</script>