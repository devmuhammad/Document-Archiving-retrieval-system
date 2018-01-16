<template src="./settings.html">
  
</template>

<script>
import accountSettings from "@/components/contents/accountSettings/account-settings"
import generalSettings from "@/components/contents/generalSettings/general-settings"

export default {
  name:"Settings",
  data () {
    return {
      isProfileSettings:true,
      isGeneralSettings:false
    }
  },
  methods:{
    showProfileSettings () {
      this.isGeneralSettings = false
      return this.isProfileSettings = true
    },
    showGeneralSettings () {
      this.isProfileSettings = false
      return this.isGeneralSettings = true
    }
  },
  components:{
    accountSettings,
    generalSettings
  }
}
</script>
