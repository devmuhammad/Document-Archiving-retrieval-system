<template src="./dashboard.html">
  
</template>

<script>
import lineChart from "@/components/contents/line-chart/line-chart"
import doughnutChart from "@/components/contents/doughnut-chart/doughnut-chart"
import { mapGetters } from 'vuex';
import {pieceLabel} from 'chart.piecelabel.js';

export default {
  name:"dashboard",

  data() {
    return {
      documentActivities: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Added',
            backgroundColor: '#38A89D',
            data: [50, 20, 21, 4, 9, 22, 30, 10, 9, 1, 66, 3]
          },
          {
            label: 'Deleted',
            backgroundColor: '#7f0a25',
            data: [30, 10, 9, 1, 66, 3, 50, 20, 21, 4, 9, 22,]
          },
          {
            label: 'Edited',
            backgroundColor: '#2F365F',
            data: [9, 1, 66, 3, 50, 20, 21, 4, 9, 22, 30, 10,]
          }
        ]
      },
      options:{responsive: true, maintainAspectRatio: false, pieceLabel: {
        mode: 'percentage',
        precision: 1,
        fontColor: '#FFF',
      }}
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
