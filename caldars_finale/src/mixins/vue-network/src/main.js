import {showStatus} from "./js/show"
import vnetwork from "./vue-network.vue"


const VueNetwork = {
  install (Vue, options) {
    
    if(!options){

      options = {}

    }

    Vue.prototype.$online = window.navigator.onLine;
    Vue.component("vnetwork", vnetwork);

    Vue.mixin ({
      mounted () {
        window.addEventListener('offline', function(e) { console.log('offline'); });
        
        return window.addEventListener('online', function(e) { console.log('online'); });
      },

      data () {
        return { isOnline:this.$online }
      },

      watch : {
        isOnline : function (val) {
          console.log(val)
          if(val === true){
            return showStatus();
          } else if (val === false) {
            return showStatus();
          }
        }

      }

    })

  }
}


export default VueNetwork;