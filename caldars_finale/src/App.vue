<template>
  <div id="app">
    <span v-if="isLoggedIn === true"><signUp></signUp></span>  

    <span v-else>
      <div class="columns is-gapless">
        <div class="column is-one-quarter" style="width:15%"> <side-bar/> </div>
        <div class="column" style="width:85%">
          <tool-bar></tool-bar>
          <router-view/>
        </div>
      </div>
    </span>

  </div>
</template>

<script>
import sideBar from "@/components/layout/sideBar/sideBar"
import toolBar from "@/components/layout/toolBar/toolBar"
import signUp from "@/components/contents/signUp/signUp"
import {LoadDocuments} from "@/mixins/fetchDocuments"
import {mapGetters} from "vuex"

export default {
  name: 'app',
  computed:{
    ...mapGetters(["isLoggedIn"])
  },
  components:{sideBar,toolBar,signUp},
  mixins:[LoadDocuments]
}
</script>

<style rel="stylesheet" src="./assets/css/font-awesome.min.css"></style>
<style lang="sass"> @import "./assets/sass/app.scss"; </style>
<style src="./assets/css/toast.min.css"></style>
<style src="./assets/css/app.css"></style>
