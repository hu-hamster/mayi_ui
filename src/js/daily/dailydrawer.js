import { defineComponent } from "vue";
import "@quasar/extras/material-icons-sharp"

export default defineComponent({
    name: 'DailyDrawer',
    data() {
        return {
            draw: true,
            miniState: true,
        }
    },
    props: ['drawer'],
    watch: {
        drawer: function (val) {
            this.draw = val;   // 接收父组件的值
        }
    },
    methods: {
        OnTodayClick() {
            this.$router.push("/app/daily")
        },
        OnSystemClick() {
            this.$router.push("/app/personal")
        },
        OnReviewClick() {
            this.$router.push('/app/review')
        }
    }
})