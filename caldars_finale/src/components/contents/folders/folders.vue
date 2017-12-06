<template src="./folders.html">
  
</template>

<script>
import folder from "./folder/folder"

export default {
  name:"folders",
  data () {
    return {
      documents:[
        {name:"Document cat1","amt":6},
        {name:"my category","amt":3},
        {name:"new category","amt":8},
        {name:"Document_category for COMSOFT Acui..","amt":0},
        {name:"Document cat2","amt":9},
        {name:"Document cat3","amt":7},
        {name:"category 4","amt":78},
        {name:"COMSOFT Proposal","amt":1},
        {name:"PH hackathon kaduna 201...","amt":1},
        {name:"Acuity Proposal","amt":0}
      ],
      isAttr:false
    }
  },
  components:{folder}
}
</script>
