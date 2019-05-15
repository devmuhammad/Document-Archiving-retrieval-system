<template>
  <div id="app">
    <span v-if="isLoggedIn === false"><auth></auth></span>  

    <span v-else-if="isLoggedIn === true">
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
import auth from "@/components/contents/auth/auth"
import {LoadDocuments} from "@/mixins/fetchDocuments"
import {mapGetters, mapActions} from "vuex"
import jwt from "jsonwebtoken"

export default {
  name: 'app',
  computed: {
    ...mapGetters(["isLoggedIn"])
  },
  created () { this.checkToken() },
  methods: {
    ...mapActions(["RESET_LOGIN","LOGOUT_USER"
    ]),

    checkToken() {
      const localStore = window.localStorage;

      let tokn = localStore.getItem("darsxlxl");
      if(tokn){
        jwt.verify(tokn, 'someVeryLongRandomString', (err, decoded) => {
          if(!err)
          {
            this.RESET_LOGIN({
              "user":decoded.data, 
              "loggedIn":true
            })
          }else {
            this.LOGOUT_USER()
            this.RESET_LOGIN({
              "user":null, 
              "loggedIn":false
            })
          }
        });
      }else { this.LOGOUT_USER(), this.RESET_LOGIN({"user":null, "loggedIn":false }) }
    }
  },
  components: { sideBar,toolBar,auth},
  mixins: [LoadDocuments]
}
</script>

<style rel="stylesheet" src="./assets/css/font-awesome.min.css"></style>
<style lang="sass"> @import "./assets/sass/app.scss"; </style>
<style src="./assets/css/Toast.min.css"></style>
<style src="./assets/css/app.css"></style>
