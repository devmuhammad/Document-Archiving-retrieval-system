import {mapGetters, mapActions} from "vuex" 

export const DocumentActions = {
  data () {
    return {
      isListType:false,
      isFolderType:true
    }
  },

  methods: {
    ...mapActions(["getDocumentCategory"]),

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
    ...mapGetters(["categoryChildren"]),

    viewSubFolders() {
      if(this.categoryChildren === null){ return false }
      else { return true }
    }
  }

}