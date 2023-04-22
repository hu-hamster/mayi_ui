import { defineComponent } from "vue";
import axios from "../utils/AxiosConfig";

export default defineComponent({
  name: 'Info',
  data() {
    return {
        oldName: "",
        oldEmail: "",
        userName: "",
        email: "",
        hint: "",
    }
  },
  methods: {
    changeUserInfo() {
      if ((this.userName != this.oldName || this.email != this.oldEmail) 
          && this.userName != "" && this.email != "") {
        axios("/api/auth/update/info", {
          name: this.userName,
          email: this.email,
        }, "POST").then(res => {
          this.hint = res.msg
          if (res.code == 200) {
            this.oldName = this.name
            this.oldEmail = this.email
          }
        })
      }
      
    },
    getUserInfo() {
      axios("/api/auth/info", {}, "GET").then(res => {
        this.oldName = res.data.name
        this.userName = res.data.name
        this.oldEmail = res.data.email
        this.email = res.data.email
      })
    }
  },
  mounted() {
    this.getUserInfo()
  }
})