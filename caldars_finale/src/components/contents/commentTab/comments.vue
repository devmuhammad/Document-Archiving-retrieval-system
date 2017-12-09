<template src="./comments.html">
  
</template>

<script>
import {mapActions, mapState, mapGetters} from "vuex"

export default {
  name:"comments",
  created: function () { return this.getComments([]) },
  props:[
    
  ],
  data(){
    return {
      
      comment :{description: '',datelog:new Date().toDateString()}
    }
  },
  computed:{
    ...mapGetters([
      "commentlist"],
     {response_status:"create_commentstatus"}
    ),
  },
  methods:{
    createNew(){ return this.addNewComment(this.comment) },

    deletecoment () { return this.DeleteComment(this.id[0])},

...mapActions([
    "getComments",
    "DeleteComment",
    "addNewComment"

    ])
}
}
</script>
