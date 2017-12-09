import {mapGetters, mapActions} from "vuex"

export const LoadDocuments = {
  methods:{
    ...mapActions(["getDocumentCategory"])
  },
  mounted(){
    return this.getDocumentCategory()
  }
}