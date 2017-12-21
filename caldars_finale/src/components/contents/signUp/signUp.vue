<template src="./signUp.html">
  
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "signUp",

  data() {
    return {
      user: {
        userName: "",
        firstName: "Admin",
        middleName: "Admin",
        lastName: "Admin",
        password: "",
        contactEmail: "",
        contactMobile: "08000000001",
        institutionid: {
          id: "",
          name: "",
          contactperson: "",
          contactEmail: "",
          businesstypeid: { id: "" },
          datecreated: new Date().toDateString()
        },
        datecreated: new Date().toDateString()
      }
    };
  },

  computed: {
    ...mapGetters({
      response_status: "create_inststatus"
    })
  },

  methods: {
    ...mapActions(["getUsers", "createNewUser", "createInstitution"]),

    createNew() {
      return this.createNewUser(this.user);
    },
    
    createNewInstitution() {
      return this.createInstitution(this.user.institutionid);
    }
  }
};
</script>