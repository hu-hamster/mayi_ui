import { defineComponent } from "vue";

export default defineComponent({
    name: 'Personal',
    data() {
        return{
            selectedTab: "info",
            tabs: [
                {name: "info", label: "信息设置"},
                {name: "security", label: "安全设置"},
                {name: "push", label: "推送设置"},
                {name: "about", label: "关于"}
            ]
        }
    },
    methods: {
        
    }
  })