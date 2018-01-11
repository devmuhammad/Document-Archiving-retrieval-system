<template src="./newProject.html">
  
</template>


<script>
import PulseLoader from "../../../../node_modules/vue-spinner/src/PulseLoader"

export default {
  name:"addProject",
  props:[
    'isProjectModalActive',
    'closeProjectModal',
    "loading",
    "project",
    "addProject"
  ],

  mounted(){ return this.$refs.projectname.focus() },
  
  components:{PulseLoader}
}
</script>
