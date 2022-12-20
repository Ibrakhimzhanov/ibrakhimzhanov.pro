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
        // "bg-orange-500",
        "panel",
        "flex",
        "items-center",
        "justify-center",
        "flex-col",
        "lg:h-screen",
        "w-screen",
        "text-center",
        "sm:space-y-5",
        "sm:px-20",
        "px-10",
        "pt-20",
        "pb-14",
        "sm:py-40",
      ],
    };
  },
};
</script>
