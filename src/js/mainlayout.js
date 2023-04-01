import { defineComponent } from "vue";

export default defineComponent({
  name: 'LoginLayout',
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