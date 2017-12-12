<template src="./folders.html">
  
</template>

<script>
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
      showChild:false
    }
  },

  computed:{
    ...mapGetters([
      "categoriesOfDocuments", 
      "categoryDetails",
      "listOfCategories"
    ]),

    isDocument(){
      return this.categoriesOfDocuments.length
    },
  },

  methods:{
    getChild(parentId){
      console.log("no parent id")
      for(let i=0;i>this.categoriesOfDocuments;i++){
        const category = this.categoriesOfDocuments[i]
        if(category.id == parentId){
          this.children = category.documentimageList
          this.showChildren = true
        }
      }
    }
  },

  components:{folder,list,subfolders}
}
</script>
