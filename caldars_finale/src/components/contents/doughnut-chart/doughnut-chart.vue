
<script>
import {Doughnut} from 'vue-chartjs';

export default {
  extends: Doughnut,
  data () {
    return {
      datacollection: {
        labels: ['Delete', 'Add', 'Edit'],
        datasets: [
          {
            label: 'Activities',
            data: [25,30,67],
            backgroundColor: ['#7f0a25','#38A89D','#2F365F'],
          }
        ]
      }
    }
  },
  mounted () {
    this.renderChart(this.datacollection, {
      responsive: true, 
      maintainAspectRatio: false,
      title: {display: true,text: 'Activity details'},
    })
  }
}
</script>