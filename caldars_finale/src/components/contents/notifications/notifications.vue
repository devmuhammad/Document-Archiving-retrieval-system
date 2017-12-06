<template src="./notifications.html">
  
</template>

<script>
import notification from "./notification/notification"
export default {
  name:"notifications",
  props:["showNote"],
  data () {
    return {
      showScroll:false,
      notes:10
    }
  },
  components:{notification}
}
</script>
