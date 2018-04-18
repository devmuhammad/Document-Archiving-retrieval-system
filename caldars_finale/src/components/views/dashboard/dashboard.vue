<template src="./dashboard.html">
  
</template>

<script>
import lineChart from "@/components/contents/line-chart/line-chart"
import doughnutChart from "@/components/contents/doughnut-chart/doughnut-chart"
import { mapGetters } from 'vuex';

export default {
  name:"dashboard",

  data() {
    return {
      documentActivities: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Added',
            backgroundColor: '#005744',
            data: [50, 20, 21, 4, 9, 22, 30, 10, 9, 1, 66, 3]
          },
          {
            label: 'Deleted',
            backgroundColor: 'red',
            data: [50, 20, 21, 4, 9, 22, 30, 10, 9, 1, 66, 3]
          },
          {
            label: 'Edited',
            backgroundColor: '#42526e',
            data: [50, 20, 21, 4, 9, 22, 30, 10, 9, 1, 66, 3]
          }
        ]
      },
      options:{responsive: true, maintainAspectRatio: false}
    }
  },

  computed: {
    ...mapGetters({
      user:"loggedInUser"
    })
  },

  components:{lineChart,doughnutChart}
}
</script>
