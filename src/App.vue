<template>
  <div id="app">
    <navbar :offCanvas="offCanvas" :toggle="toggleSideNav"></navbar>
    <side-bar :fixed="fixed"></side-bar>
    <div :class="{'offCanvas': offCanvas,'section':true}">
      <div class="app-container">
        <router-view></router-view>
      </div>  
    </div>
  </div>
</template>

<script>
import navbar from "@/components/navbar/navbar"
import sideBar from "@/components/sidebar/sidebar"
export default {
  name: 'app',
  data () {
    return {
      fixed:true,
      offCanvas:true
    }
  },
  components:{
    navbar,
    sideBar
  },
  methods: {
    toggleSideNav(){
      this.fixed = !this.fixed
      this.offCanvas = !this.offCanvas
    },
  },
}
</script>

<style rel="stylesheet" src="./assets/css/font-awesome.min.css"></style>
<style src="./assets/css/app.css"></style>
<style src="./assets/css/materialize.css"></style>