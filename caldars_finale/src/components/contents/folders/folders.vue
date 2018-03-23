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
      isFetching:false,
      bottom: false,
      page_num: 0
    }
  },

  created() {
    window.addEventListener('scroll', () => {
      this.bottom = this.bottomVisible()
    })
  },

  computed:{
    ...mapGetters([
      "categoriesOfDocuments", 
      "categoryDetails",
      "listOfCategories",
      "paginating",
      "selectAllStatus"
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
    ...mapActions(["getDocumentCategory"]),

    getChild(parentId){
      for(let i=0;i>this.categoriesOfDocuments;i++){
        const category = this.categoriesOfDocuments[i]
        if(category.id == parentId){
          this.children = category.documentimageList
          this.showChildren = true
        }
      }
    },

    bottomVisible() {
      const scrollY = window.scrollY
      const visible = document.documentElement.clientHeight
      const pageHeight = document.documentElement.scrollHeight
      const bottomOfPage = visible + scrollY >= pageHeight
      return bottomOfPage || pageHeight < visible
    },
  },

  watch: {
    bottom(bottom) {
      if (bottom) {
        this.page_num+=1
        this.getDocumentCategory(this.page_num)
      }
    }
  },

  components:{folder,list,subfolders,BounceLoader}
}
</script>
