<template src="./roleManager.html">
  
</template>
<script>

export default {
    name:"roleManager",
    data () {
        return {
            roletitle:"",   
            userRolesList:[],
            newUserGroup:[],
            checked:[],
            displaygroup:false
            
        }
    },
methods:{
    addUserGroup(){
        
        if (!this.roletitle || this.checked.length === 0){
         this.displaygroup= false
        }else {
        this.displaygroup= true
        // this.newUserGroup = this.roletitle
        this.userRolesList.push(this.checked)
        this.newUserGroup.push(this.roletitle)
        this.checked = []
        this.roletitle =""
        
        } 
        },
        deleteGroup(){
            this.userRolesList.splice()
            this.newUserGroup.splice()
        }

    }
}





</script>