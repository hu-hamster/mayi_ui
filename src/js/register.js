import { defineComponent } from "vue";
import axios from "./utils/AxiosConfig";

export default defineComponent({
    name: 'Register',
    data() {
      return {
        hint: "",
        user: {
          name: "",
          email: "",
          password: "",
          repassword: "",
        }
      }
    },
    methods: {
      onLoginClick() {
        this.$router.push("/login")
      },
      onRegisterClick() {
        if(this.user.email == "" || this.user.name == "" ||
            this.user.password == "" || this.user.repasword == "") {
          this.hint = "参数不完整，请重新输入"
          return
        }
        if(this.user.name.length > 20) {
          this.hint = "用户名不能超过20个字符"
          return
        }
        var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        if(!reg.test(this.user.email)) {
          this.hint = "邮箱格式有误，请重新输入"
          return
        }
        if(this.user.password !== this.user.repassword) {
          this.user.password = ""
          this.user.repassword = ""
          this.hint = "两次密码不一致"
          return
        }
        if(this.user.password.length < 8){
          this.user.password = ""
          this.user.repassword = ""
          this.hint = "密码长度必须超过8位，请重新输入"
          return
        }
        axios("/api/auth/register", {
          name: this.user.name,
          email: this.user.email,
          password: this.user.password,
        }, "post").then(res=>{
          if(res.code != 200) {
            this.hint = res.msg
            this.cleanUserInfo()
          }else {
            localStorage.setItem("token", res.token)
            this.$router.push("")
          }
        }).catch(err => {
          console.log(err)
        })
      },
      cleanUserInfo() {
        this.user.name = ""
        this.user.email = ""
        this.user.password = ""
        this.user.repassword = ""
      }
    }
  })