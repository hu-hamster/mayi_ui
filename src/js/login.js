import { defineComponent } from "vue";
import axios from "./utils/AxiosConfig";

export default defineComponent({
    name: 'Login',
    data() {
        return {
          hint: "",
          user: {
            email: "",
            password: ""
          }
        }
    },
    methods: {
      onLoginClick() {
        //登录逻辑
        if (this.user.email == "" || this.user.password == "") {
          this.hint = "用户邮箱或密码不能为空"
          return
        }
        axios("/api/auth/login", this.user, "post").then(res => {
          if(res.code != 200){
            this.hint = res.msg
            this.user.email = ""
            this.user.password = ""
          }else {
            localStorage.setItem("token", res.token)
            this.$router.push("/app/daily")
          }
        }).catch(err => {
          console.log(err)
        })
      },
      onRegisterClick() {
        //跳转注册界面
        this.$router.push("/register")
      }
    }
  })