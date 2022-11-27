<template>
  <section id="main" :class="classes">
    <MainPageHeader />

    <BaseButton is-main-button title="Check out my project" />
  </section>
</template>
<script>
import BaseButton from "./BaseButton.vue";
import MainPageHeader from "./MainPageHeader.vue";
export default {
  components: {
    BaseButton,
    MainPageHeader,
  },
  data() {
    return {
      classes: [
        "panel",
        "flex",
        "items-center",
        "justify-center",
        "flex-col",
        "h-screen",
        "w-screen",
        "text-center",
        "sm:space-y-5",
        "space-y-14",
        "sm:px-6",
        "px-10",
        "pt-20",
        "pb-14",
        "sm:py-0",
      ],
    };
  },
};
</script>
