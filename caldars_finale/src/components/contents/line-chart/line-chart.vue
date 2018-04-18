
<script>
import {Bar, Line, HorizontalBar} from 'vue-chartjs';
import {pieceLabel} from 'chart.piecelabel.js';

export default {
  extends: HorizontalBar,
  props: ["data", "options"],
  data () {
    return {
      
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
