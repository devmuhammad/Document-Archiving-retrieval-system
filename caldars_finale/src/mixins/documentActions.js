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
    ...mapActions(["setSubFoldersNull", "doSelectAll", "displayFileContents"]),

    setListType() {
      this.isListType = true
      this.isFolderType = false
    },

    setFolderType() {
      this.isFolderType = true
      this.isListType = false
    }

  },

  computed:{
    ...mapGetters(["categoryChildren", "selectAllStatus", "file_opened", "isSearchResultReady"]),

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