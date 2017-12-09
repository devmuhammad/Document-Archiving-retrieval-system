<template src="./upload.html">
  
</template>

<script>
import {uploadService} from '@/mixins/fileUploadService.js'

export default {
  name:"upload",
  props:["isUploadActive",'closeModal'],
  mixins:[uploadService]
}
</script>
