<template src="./upload.html">
  
</template>

<script>
import { uploadService } from "@/mixins/fileUploadService.js";
import ClipLoader from "../../../../node_modules/vue-spinner/src/ClipLoader.vue"

export default {
  name: "upload",
  props: ["isUploadActive", "closeModal"],

  data() {
    return {
      displayForm: false,
      allCategories: undefined,
      projects: undefined,
      errorFetching: undefined,
      categoryType:undefined,
      projectType:undefined,
      desc:"",
      createdBy:"",
      filesList:undefined,
      isSavingProps:false
    };
  },

  computed: {
    isNext() {
      return this.displayForm;
    },

    isLoading() {
      return (this.allCategories == undefined) ? true:false
    }
  },

  methods:{
    uploadController(){
      if(this.isSuccess){
        return this.displayForm = true
      }else if(this.isFailed){
        return this.reset()
      }
    }
  },

  components:{ClipLoader},

  mixins: [uploadService]
};
</script>
