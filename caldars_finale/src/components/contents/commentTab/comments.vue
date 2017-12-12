<template src="./comments.html">
  
</template>

<script>
import {mapActions, mapState, mapGetters} from "vuex"
import {infiniteScroll} from '../../../../node_modules/vue-infinite-scroll'

export default {
  name:"comments",
  
  props:[
    
  ],
  data(){
    return {
      id:2,
      comment :{description: '',datelog:new Date().toDateString()},
      
      data: [],
      busy: false
    }
  },
  computed:{
    ...mapGetters(["commentlist"]),
  },
  methods:{
    createNew(){ return this.addNewComment(this.comment) },

    deletecoment () { return this.DeleteComment(this.id[0])},

...mapActions([
    "DeleteComment",
    "addNewComment"

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
