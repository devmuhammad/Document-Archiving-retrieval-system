
<script>
import {Bar} from 'vue-chartjs';

export default {
  extends: Bar,
  data () {
    return {
      datacollection: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Activities',
            backgroundColor: '#42526e',
            data: [50, 20, 21, 4, 9, 22, 30, 10, 9, 1, 66, 3]
          }
        ]
      }
    }
  },
  mounted () {
    this.renderChart(this.datacollection, {responsive: true, maintainAspectRatio: false})
  }
}
</script>
