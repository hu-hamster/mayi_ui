import { defineComponent } from "vue";
import axios from "../utils/AxiosConfig";

export default defineComponent({
    name: 'Push',
    data() {
        return {
            pushType: [
                {type: "请选择", content: {}},
                {type: "邮箱", content: {
                    emailService: "邮箱服务名称，比如126、163、Gmail、QQ等，支持列表https://nodemailer.com/smtp/well-known/",
                    emailUser: "邮箱地址",
                    emailPort: "邮箱SMTP服务器端口号",
                    emailPass: "邮箱SMTP授权码",
                }},
                {type: "PushPlus", content: {
                    pushPlusToken: "微信扫码登录后一对一推送或一对多推送下面的token(您的Token)",
                }},
                {type: "Server酱", content: {
                    serverChanKey: "Server酱SENDKEY",
                }},
                {type: "PushDeer", content: {
                    pushDeerUrl: "PushDeer自架服务器的链接（服务器端IP或域名:8800），如果非自架可不填",
                    pushDeerKey: "PushDeer的Key，https://github.com/easychen/pushdeer",
                }},
                {type: "Bark", content: {
                    barkUrl: "Bark的信息IP，例如：https://api.day.app",
                    barkPushKey: "Bark的设备识别码",
                    userName: "如果自设服务器，为了安全设置的BasicAuth的username，没有则不填",
                    password: "如果自设服务器，为了安全设置的BasicAuth的password，没有则不填"
                }},
            ],
            modelValues: [
                {},
                {emailService: "", emailUser: "", emailPort: "", emailPass: ""},
                {pushPlusToken: ""},
                {serverChanKey: ""},
                {pushDeerUrl: "", pushDeerKey: ""},
                {barkUrl: "", barkPushKey: "", userName: "", password: ""},
            ],
            selectIndex: 0,
        }
    },
    methods: {
        changePushInfo() {
            var formDate = {}
            if (this.selectIndex == 1) {
                formDate = {
                    type: "email",
                    server_email: this.modelValues[this.selectIndex].emailUser,
                    server_email_host: "smtp." + this.modelValues[this.selectIndex].emailService + ".com",
                    server_email_port: Number(this.modelValues[this.selectIndex].emailPort),
                    server_email_authorization: this.modelValues[this.selectIndex].emailPass
                }
            } else if (this.selectIndex == 2) {
                formDate = {
                    type: "pushplus",
                    pushplus_token: this.modelValues[this.selectIndex].pushPlusToken,
                }
            } else if (this.selectIndex == 3) {
                formDate = {
                    type: "server",
                    server_sendkey: this.modelValues[this.selectIndex].serverChanKey,
                }
            } else if (this.selectIndex == 4) {
                formDate = {
                    type: "pushdeer",
                    pushdeer_url: this.modelValues[this.selectIndex].pushDeerUrl,
                    pushdeer_pushkey: this.modelValues[this.selectIndex].pushDeerKey,
                }
            } else if (this.selectIndex == 5) {
                formDate = {
                    type: "bark",
                    bark_url: this.modelValues[this.selectIndex].barkUrl,
                    bark_pushkey: this.modelValues[this.selectIndex].barkPushKey,
                    bark_auth_user: this.modelValues[this.selectIndex].userName,
                    bark_auth_password: this.modelValues[this.selectIndex].password,
                }
            }
            axios("/api/auth/update/pushinfo", formDate, "POST").then(res=>{
                console.log(res)
            })
        },
        getPushDetail() {
            if (this.selectIndex != 0) {
                axios("/api/auth/pushinfo", {
                    type: this.selectIndex,
                }, "POST").then(res=>{
                    if (this.selectIndex == 1) {
                        this.modelValues[this.selectIndex].emailUser = res.data.emailUser
                        this.modelValues[this.selectIndex].emailService = res.data.emailService
                        this.modelValues[this.selectIndex].emailPort = res.data.emailPort
                        this.modelValues[this.selectIndex].emailPass = res.data.emailPass
                    } else if (this.selectIndex == 2) {
                        this.modelValues[this.selectIndex].pushPlusToken =  res.data.pushPlusToken
                    } else if (this.selectIndex == 3) {
                        this.modelValues[this.selectIndex].serverChanKey = res.data.serverChanKey
                    } else if (this.selectIndex == 4) {
                        this.modelValues[this.selectIndex].pushDeerUrl = res.data.pushDeerUrl
                        this.modelValues[this.selectIndex].pushDeerKey = res.data.pushDeerKey
                    } else if (this.selectIndex == 5) {
                        this.modelValues[this.selectIndex].barkUrl = res.data.barkUrl
                        this.modelValues[this.selectIndex].barkPushKey = res.data.barkPushKey
                        this.modelValues[this.selectIndex].userName = res.data.userName
                        this.modelValues[this.selectIndex].password = res.data.password
                    }
                })
            }
            
        }
    }
})