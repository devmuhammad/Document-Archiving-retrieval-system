import {mapGetters, mapActions} from "vuex"

export const LoadDocuments = {
  methods:{
    ...mapActions([
      "getDocumentCategory",
      "getCategoryList"
    ])
  },
  mounted(){
    this.getCategoryList()
    this.getDocumentCategory(0)
  }
}