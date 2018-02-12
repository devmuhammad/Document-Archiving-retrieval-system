import {mapGetters, mapActions} from "vuex"

export const documentPath = {
  computed: {
    ...mapGetters({"activePath":"dir__stack"}),

    activeDir () {
      if (this.activePath === null) { 
        return false;
      } else if (this.activePath !== null) {
        return true;
      }
    } 
  },

  methods : {
    ...mapActions({"goToDocuments":"setSubFoldersNull", "changeDirectory":"changeDirectory"})
  }
}