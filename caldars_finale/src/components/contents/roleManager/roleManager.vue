<template src="./roleManager.html">
  
</template>
<script>
import {mapActions, mapState, mapGetters} from "vuex"
import api from '@/API/userGroup'

export default {
    name:"roleManager",
    data () {
        return {
            roletitle:"",   
            newUserGroup:[],
            selectedRoles:[],
            displaygroup:false,
            rolesComp:0,
            btnText: "Add Group"
        }
    },
mounted(){
    this.getUserroles();
    this.getUsergroups();
},
computed: {
    ...mapGetters(['usergroups','userroles','create_usergroupstatus','groupid'])
    },
methods:{
     async addUserGroup(){
        
        if (!this.roletitle || this.selectedRoles.length === 0){
        
        }else {
        // this.newUserGroup = this.roletitle
        
        for (let i=0; i< this.selectedRoles.length; i++){
            let userRolesLists={
            rolesid : this.selectedRoles[i].id,
            groups : this.roletitle,
            groupsid : ""
            }
            this.newUserGroup.push(userRolesLists)
        }
        
        //    await this.createNewUserGroup(this.newUserGroup)
            let docmsg;
            let grpid;

             const fetch = () => {
        return  api.CREATE_USERGROUP(this.newUserGroup)
          .then(res => {
            
            docmsg = res.message
            grpid =  res.data[0].id
            
            // this.projects = res.projects
          })
          .catch(err => {
            this.errorFetching = true
          })
      };

      await fetch()

      if(docmsg == "Success") {
         await this.newUserGroup.forEach(element => {
            element.groupsid = grpid
        })
            // console.log(this.newUserGroup)

           this.createGroupRoles(this.newUserGroup)
      }else new Toast({
        message: "OooOps, Unable to Add!",
        type: 'danger',
            })
        this.userRolesLists={}
        this.selectedRoles = []
        this.roletitle =""
        // }
        } 
        },
        editGroup(group){
            this.btnText = "Update Group"
            this.roletitle = group.name
            this.userroles.forEach((element,index) => {
                
                if (group.roles[index].name === element.name){
                    this.selectedRoles[index] = true
                    // document.getElementById("rolesid").checked = true;
                }
            });
        },

        deleteGroup(groupid){
            let customButtons =   [
        {
          text:"Yes",
          onClick: () => { this.deleteUsergroup(groupid);new Toast({
        message: "User Deleted Successfully !",
        type: 'success'}); this.rolesComp += 1}  
        }
            ]

      new Toast({
        message: "Delete this group ?",
        type: 'danger',
        customButtons
            })

            // 
            // this.userRolesList.splice()
            // this.newUserGroup.splice()
        },

        ...mapActions(['getUserroles','getUsergroups',
        'updateUsergroup','deleteUsergroup',
        'createNewUserGroup','createGroupRoles'])
    
    }
}





</script>