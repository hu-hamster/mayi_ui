import { defineComponent } from "vue";
import axios from "../utils/AxiosConfig";
import {getCurrentTime, spiltTimeFromType} from "../utils/timeUtils"

export default defineComponent({
    name: 'DailyList',
    data() {
        return {
            taskType: ["普通任务", "推送任务", "定时任务"],
            pushType: ["邮箱", "PushPlus", "Server酱", "PushDeer", "Bark"],
            taskList: [],
            cardTask: {
                name: "",
                taskType: -1,
                pushType: -1,
                description: "",
            },
            date: "",
            hint: "",
        }
    },
    methods: {
        addNewTaskCard() {
            document.getElementById("card_addTask").style.display = "block";
            document.getElementById("fade").style.display = "block";
        },
        closeWinpass() {
            this.initTaskCard()
            document.getElementById("card_addTask").style.display = "none";
            document.getElementById("fade").style.display = "none";
        },
        addNewTask() {
            this.hint = ""
            if (this.cardTask.name == "") {
                this.hint = "请输入任务名称"
                return
            }
            if (this.cardTask.taskType == -1) {
                this.hint = "请选择任务类型"
                return
            }
            if (this.cardTask.pushType == 2 && this.cardTask.pushType == -1) {
                this.hint = "请选择推送类型"
                return
            }
            axios("/task/add", {
                name: this.cardTask.name,
                type: this.cardTask.taskType + 1,
                year: spiltTimeFromType(this.date, "year"),
                month: spiltTimeFromType(this.date, "month"),
                day: spiltTimeFromType(this.date, "day"),
                hour: spiltTimeFromType(this.date, "hour"),
                minute: spiltTimeFromType(this.date, "minute"),
                push_type: this.cardTask.pushType + 1,
                parentId: 0,
                finished: false,
            }, "post").then(res=>{
                if (res.code != 200) {
                    this.hint= res.msg
                    return
                } else {
                    this.closeWinpass()
                }
            })

        },
        getTodayTaskList() {
            var date = new Date();
            axios("/task/list", {
                year: date.getFullYear(),
                month: date.getMonth() + 1,
                day: date.getDate(),
            }, "post").then(res=>{
                this.taskList = res.data
                for (var i = 0; i < this.taskList.length; i++) {
                    this.taskList[i].Date = this.formatDate(this.taskList[i].Date)
                }
            })  
        },
        formatDate(dateString) {
            const date = new Date(dateString)
            const year = date.getFullYear();
            const month = ('0' + (date.getMonth() + 1)).slice(-2);
            const day = ('0' + date.getDate()).slice(-2);
            const hours = ('0' + date.getHours()).slice(-2);
            const minutes = ('0' + date.getMinutes()).slice(-2);
            return `${year}-${month}-${day} ${hours}:${minutes}`
        },
        initTaskCard() {
            this.hint = ""
            this.cardTask = {
                name: "",
                taskType: -1,
                pushType: -1,
                description: "",
            }
        }
    },
    mounted() {
        this.date = getCurrentTime()
        this.getTodayTaskList()
    }
})