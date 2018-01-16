import {mapGetters, mapActions} from "vuex" 

export const DocumentActions = {
  data () {
    return {
      isListType:false,
      isFolderType:true,
      folderState:null,
      selectAllSubFolders:false,
      selectAllFolders:false,
      select:false
    }
  },

  methods: {
    ...mapActions(["setSubFoldersNull"]),

    setListType() {
      this.isListType = true
      this.isFolderType = false
    },

    setFolderType() {
      this.isFolderType = true
      this.isListType = false
    },

    

  },

  computed:{
    ...mapGetters(["categoryChildren"]),

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
    },

    selectAll () {
      if(this.select === true && this.getFolderState === "F"){
        return this.selectAllFolders = true
      } else if(this.select === true && this.getFolderState === "SF") {
        return this.selectAllSubFolders = true
      }
    }
  }

}