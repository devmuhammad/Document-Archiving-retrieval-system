<template src="./documents.html">
  
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import commentArea from "@/components/layout/commentArea/commentArea"
import folders from "@/components/contents/folders/folders"
import subfolders from "@/components/contents/subFolders/subFolders"
import search from "@/components/contents/search/search"
import pagination from "@/components/contents/pagination/pagination"
import uploadModal from "@/components/contents/upload/upload"
import categoryModal from "@/components/contents/category/category"
import addProjectModal from "@/components/contents/newProject/newProject"
import preview__canvas from "@/components/contents/preview__canvas/preview__canvas"
import shareDoc from "@/components/contents/shareDoc/shareDoc"
import searchResults from "@/components/contents/searchResults/searchResults"
import {addCategory} from "../../../mixins/addCategory"
import {addProject} from "../../../mixins/addProject"
import {DocumentActions} from "../../../mixins/documentActions"

export default {
  name:"documents",
  data () {
    return {
      documents:14,
      setUploadActive:false,
      setShareActive:false
    }
  },
  computed: {
    ...mapGetters([
      'selectedDocs'
    ])
  },
  methods:{
    Delete(){
      new Toast({
        message: 'Are you sure you want to delete "Proposal and 3 other documents"?',
        type: 'danger',
        customButtons:[
          { text:"Yes",
            onClick:function confirmDelete(){
              return true;
            }}
        ]
      })
    },
    displayUploadModal(){
      return this.setUploadActive = true
    },
    closeModal(){
      return this.setUploadActive = false
    },
    showShareModal(){
      if (this.selectedDocs.length === 0){
        new Toast({
        message: 'Please Select document(s) to share',
        type: 'danger'})
      } else
        return this.setShareActive = true
    },
    closeShareModal(){
      return this.setShareActive = false
      this.selectedDocs = []
    },
  },
  
  components:{
    commentArea, 
    folders, 
    search,
    pagination,
    uploadModal,
    categoryModal,
    subfolders,
    addProjectModal,
    shareDoc,
    preview__canvas,
    searchResults
  },

  mixins:[addCategory,DocumentActions,addProject]
}
</script>
