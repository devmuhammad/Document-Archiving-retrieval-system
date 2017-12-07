<template>
  <div id="app" class="columns is-gapless">
    <div class="column is-one-quarter" style="width:15%"> <side-bar/> </div>
    <div class="column" style="width:85%">
      <tool-bar></tool-bar>
      <router-view/>
    </div>
  </div>
</template>

<script>
import sideBar from "@/components/layout/sideBar/sideBar"
import toolBar from "@/components/layout/toolBar/toolBar"

export default {
  name: 'app',
  components:{sideBar,toolBar}
}
</script>

<style rel="stylesheet" src="./assets/css/font-awesome.min.css"></style>
<style lang="sass"> @import "./assets/sass/app.scss"; </style>
<style src="./assets/css/toast.min.css"></style>
<style src="./assets/css/app.css"></style>
