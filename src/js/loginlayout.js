import { defineComponent } from "vue";

export default defineComponent({
  name: 'MainLayout',
  data() {
  },
  methods: {
    onMainClick() {
        this.$router.push('/')
    }
  }
})