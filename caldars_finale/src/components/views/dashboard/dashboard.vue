<template src="./dashboard.html">
  
</template>

<script>
import lineChart from "@/components/contents/line-chart/line-chart"
import doughnutChart from "@/components/contents/doughnut-chart/doughnut-chart"
import { mapGetters } from 'vuex';

export default {
  name:"dashboard",

  computed: {
    ...mapGetters({
      user:"loggedInUser"
    })
  },

  components:{lineChart,doughnutChart}
}
</script>
