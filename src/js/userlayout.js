import { defineComponent } from "vue";

export default defineComponent({
  name: 'UserLayout',
  data() {
    return {
      drawer: false,
      imageList: [
        {
          id: 1,
          src: "path/to/image1",
          alt: "Image 1"
        },
        {
          id: 2,
          src: "path/to/image2",
          alt: "Image 2"
        },
        {
          id: 3,
          src: "path/to/image3",
          alt: "Image 3"
        }
      ]
    };
  },
  methods: {
    onPersonalClick() {
      this.$router.push({
        path: "/app/personal",
      });
    },
    onQuitClick() {
      localStorage.clear()
      this.$router.push({
        path: "/",
      });
    }
  }
})