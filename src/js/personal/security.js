import { defineComponent } from "vue";
import axios from "../utils/AxiosConfig";

export default defineComponent({
  name: 'Security',
  data() {
    return {
       oldPassword: "",
       newPassword: "",
       reNewPassword: "",
       hint: "",
    }
  },
  methods: {
    changePassword() {
        if (this.oldPassword == "" || this.newPassword == "" 
           || this.reNewPassword == "") {  
            this.hint = "参数不完整，请重新输入"
            this.clearFormInfo()
            return
        }
        if (this.newPassword != this.reNewPassword) {
            this.hint = "新密码不一致，请重新输入"
            this.clearFormInfo()
            return
        }
        if (this.oldPassword == this.newPassword) {
            this.hint = "新密码不能与旧密码一致，请重新输入"
            this.clearFormInfo()
            return
        }
        axios("/api/auth/update/password", {
            old_password: this.oldPassword,
            new_password: this.newPassword,
        }, "POST").then(res=>{
            this.hint = res.msg
        })
    },
    clearFormInfo() {
        this.oldPassword = ""
        this.newPassword = ""
        this.reNewPassword = ""
    }
  },
  mounted() {
    
  }
})