
<script>
import {Doughnut, Pie} from 'vue-chartjs';
//import {pieceLabel} from 'chart.piecelabel.js'

export default {
  extends: Pie,
  data () {
    return {
      datacollection: {
        labels: ['Delete', 'Add', 'Edit'],
        datasets: [
          {
            label: 'Activities',
            data: [25,70,30],
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
      pieceLabel: {
        mode: 'percentage',
        precision: 1,
        fontColor: '#FFF',
        fontSize: 18,
      }
    })
  }
}
</script>