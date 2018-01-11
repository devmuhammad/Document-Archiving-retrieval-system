<template src="./documents.html">
  
</template>

<script>
import commentArea from "@/components/layout/commentArea/commentArea"
import folders from "@/components/contents/folders/folders"
import subfolders from "@/components/contents/subFolders/subFolders"
import search from "@/components/contents/search/search"
import pagination from "@/components/contents/pagination/pagination"
import uploadModal from "@/components/contents/upload/upload"
import categoryModal from "@/components/contents/category/category"
import addProjectModal from "@/components/contents/newProject/newProject"
import {addCategory} from "../../../mixins/addCategory"
import {addProject} from "../../../mixins/addProject"
import {DocumentActions} from "../../../mixins/documentActions"

export default {
  name:"documents",
  data () {
    return {
      documents:14,
      setUploadActive:false
    }
  },
  methods:{
    Delete(){
      new Toast({
        message: 'Are you sure you want to delete "Proposal and 3 other documents"?',
        type: 'danger',
        customButtons:[
          {
            text:"Yes",
            onClick:function confirmDelete(){
              return true;
            }
          }
        ]
      })
    },
    displayUploadModal(){
      return this.setUploadActive = true
    },
    closeModal(){
      return this.setUploadActive = false
    }
  },
  
  components:{
    commentArea, 
    folders, 
    search,
    pagination,
    uploadModal,
    categoryModal,
    subfolders,
    addProjectModal
  },

  mixins:[addCategory,DocumentActions,addProject]
}
</script>
