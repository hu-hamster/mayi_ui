import { defineComponent } from "vue";

export default defineComponent({
  name: 'MainLayout',
  data() {
  },
  methods: {
    onLoginClick() {
        this.$router.push("/login")
    },
    onRegisterClick() {
        this.$router.push("register")
    }
  }
})