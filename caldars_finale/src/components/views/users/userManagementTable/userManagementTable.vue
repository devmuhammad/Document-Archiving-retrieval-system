<template src="./userManagementTable.html">
  
</template>

<script>
import userManagementTableItem from "../userManagementTableItem/userManagementTableItem";
import addUser from "../addUserForm/addUser"
// import updateUser from "../updateUserForm/updateUser"
import {mapActions, mapState, mapGetters} from "vuex"
import FadeLoader from "../../../../../node_modules/vue-spinner/src/FadeLoader.vue"

export default {
  name: "userManagementTable",
  created: function () { return this.getUsers([]) },
  data () {
    return {
      openModal: false,
      
      loading : true,
      ec_checkboxes: [],
      checkedlist: [],
      
    }   
  },
  computed:{
    ...mapGetters([
      'userslist'
    ]),
    selectAll: {
      get: function () {
        return this.userslist ? this.ec_checkboxes.length == this.userslist.length : false;
      },
      
      set: function (value) {
        let ec_checkboxes = [];

        if (value) 
        {
          this.userslist.forEach( function (user) {
              ec_checkboxes.push(user.userid); 
          });
        }
        this.ec_checkboxes = ec_checkboxes;
        console.log(ec_checkboxes)
      }
    }
  },
  methods:{
    setAddModalActive () { return this.openModal = !this.openModal },
    // setUpdateModalActive () { return this.openupdateModal = !this.openupdateModal },

    isSelected (event) { 
      if(event.target.checked === true)
      {
        this.checkedlist.push(event.target.value)
        console.log(this.checkedlist)
      }else{
        const index = this.checkedlist.indexOf(event.target.value)
        return index > -1 ? this.checkedlist.splice(index, 1) : false
        console.log(this.checkedlist)
      }
    },

    deleteUser () { return this.DeleteUser(this.checkedlist[0])},
    

    ...mapActions([
      "getUsers",
      "DeleteUser",
      
    ])
  },
  components:{userManagementTableItem, addUser, FadeLoader}
}

</script>
