import { defineComponent } from "vue";
import axios from "../utils/AxiosConfig";

export default defineComponent({
    name: 'DailyList',
    data() {
        return {
            taskType: ["普通任务", "推送任务", "定时任务"],
            taskList: [],
        }
    },
    methods: {
        addNewTask() {

        },
        getTodayTaskList() {
            var date = new Date();
            axios("/task/list", {
                year: date.getFullYear(),
                month: date.getMonth() + 1,
                day: date.getDate() - 2,
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
        }
    },
    mounted() {
        this.getTodayTaskList()
    }
})