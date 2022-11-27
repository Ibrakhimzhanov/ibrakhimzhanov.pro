<template>
  <header :class="classes">
    <NavigationLogotype />
    <TheNavbar v-show="isNavbarOpen" />
    <TheNavbarSmall :is-open="isNavbarSmallOpen" v-show="!isNavbarOpen" />
  </header>
</template>
<script>
import NavigationLogotype from "./NavigationLogotype.vue";
import TheNavbar from "./TheNavbar.vue";
import TheNavbarSmall from "./TheNavbarSmall.vue";
export default {
  components: {
    NavigationLogotype,
    TheNavbar,
    TheNavbarSmall,
  },
  data() {
    return {
      isNavbarSmallOpen: false,
      isNavbarOpen: false,
      classes: [
        "flex",
        "items-center",
        "justify-between",
        "w-screen",
        "fixed",
        "top-0",
        "z-10",
        "px-8",
        "py-4",
        "bg-main",
        "bg-opacity-95",
        "border",
        "border-transparent",
        "lg:border-b-main-primary",
      ],
    };
  },
  mounted() {
    this.onResize();

    window.addEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      if (window.innerWidth < 1024) {
        this.isNavbarSmallOpen = true;
        this.isNavbarOpen = false;
      } else {
        this.isNavbarSmallOpen = false;
        this.isNavbarOpen = true;
      }
    },
  },
};
</script>
