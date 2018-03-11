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
     // commentlist:[],
     time:new Date(),
      comment :{ comments: '', documentactivitiesid:{id:3}, userid:{id:1}, datelog:new Date().now},  
      data: [],
      busy: false
    }
  },
  computed:{
    ...mapGetters(["commentlist"]),
    ...mapGetters(["selectedChildren"]),
  },
  
  methods:{
    // createNew(){ 
    //    },

      postComment(){
        this.commentlist.push(this.comment)
        return this.addNewComment(this.comment)
        this.comment={}
      },

    deletecomment () { return this.DeleteComment(this.comment.id[0])},

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
