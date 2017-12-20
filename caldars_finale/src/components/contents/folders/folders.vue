<template src="./folders.html">
  
</template>

<script>
import BounceLoader from "../../../../node_modules/vue-spinner/src/BounceLoader"
import folder from "./folder/folder"
import subfolders from "@/components/contents/subFolders/subFolders"
import list from "./list/list"
import {mapGetters, mapActions} from "vuex"

export default {
  name:"folders",
  props:["isListType", "isFolderType"],

  data () {
    return {
      isAttr:false,
      folderType:false,
      children:undefined,
      showChild:false,
      isFetching:false
    }
  },

  computed:{
    ...mapGetters([
      "categoriesOfDocuments", 
      "categoryDetails",
      "listOfCategories",
      "paginating"
    ]),

    isDocument(){
      if(this.categoriesOfDocuments.length > 0){
        return this.categoriesOfDocuments.length
      }else{
        this.isFetching = true
        return undefined;
      }
      
    },

    isPaginating(){
      return this.paginating
    }
  },

  methods:{
    getChild(parentId){
      for(let i=0;i>this.categoriesOfDocuments;i++){
        const category = this.categoriesOfDocuments[i]
        if(category.id == parentId){
          this.children = category.documentimageList
          this.showChildren = true
        }
      }
    }
  },

  components:{folder,list,subfolders,BounceLoader}
}
</script>
