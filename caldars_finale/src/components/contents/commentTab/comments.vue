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
     today: new Date().toISOString().slice(0, 10),
     newComment:"",
      comment :{ comments: '', documentactivitiesid:{id:3}, userid:{id:1}, datelog: this.today},  
      data: [],
      busy: false
    }
  },
  computed:{
    ...mapGetters(["commentlist"]),
    ...mapGetters(["selectedChildren"]),
    ...mapGetters({user:"loggedInUser"})
  },
  
  methods:{
    // createNew(){ 
    //    },

      postComment(){
        this.comment.comments = this.newComment
        this.commentlist.push(this.comment)
         this.addNewComment(this.comment)
        this.newComment =""
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
