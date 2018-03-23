import {mapGetters, mapActions} from "vuex" 

export const DocumentActions = {
  data () {
    return {
      isListType:false,
      isFolderType:true,
      folderState:null,
      selectAllSubFolders:false,
      selectAllFolders:false,
      select:this.selectAllStatus,
      searchKeyword: null
    }
  },

  methods: {
    ...mapActions([
      "setSubFoldersNull", 
      "doSelectAll", 
      "displayFileContents", 
      "DELETE_CATEGORY",
      "getDocumentCategory"
    ]),

    setListType() {
      this.isListType = true
      this.isFolderType = false
    },

    setFolderType() {
      this.isFolderType = true
      this.isListType = false
    },

    async EXEC_DELETE () {
      await this.DELETE_CATEGORY()
      return this.getDocumentCategory(0)
    },

    Delete(){
      let customButtons = this.deleteStatement === "Please select a document to delete!" ? null :[
        {
          text:"Yes",
          onClick: () => {return this.EXEC_DELETE() }  
        }
      ];

      new Toast({
        message: this.deleteStatement,
        type: 'danger',
        customButtons
      })
    },

  },

  computed:{
    ...mapGetters([
      "categoryChildren", 
      "selectAllStatus", 
      "file_opened", 
      "isSearchResultReady",
      "deleteStatement",
      "selectedDocumentIds"
    ]),

    viewSubFolders() {
      if(this.categoryChildren === null){ return false }
      else { return true }
    },

    getFolderState () {
      if(this.viewSubFolders === false){
        return this.folderState = "F"
      } else {
        return this.folderState = "SF"
      }
    }
  },

  watch: {
    select : function (val) {
      switch (val){
        case val === true && this.categoryChildren === null:
          let data = {select:val, folderState:this.folderState}
          this.doSelectAll(data)
          break;
        case val === true && this.categoryChildren !== null:
          data = {select:false, folderState:this.folderState}
          this.doSelectAll(data)
          break;
        default:
          data = {select:val, folderState:this.folderState}
          this.doSelectAll(data)
          break;
      }
    },

  }

}