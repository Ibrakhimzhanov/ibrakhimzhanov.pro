<template>
  <TheHeader />
  <div :class="headerClasses">
    <TheMainPage /> <TheWorks /> <TheAbout /> <TheHeadingSection />
  </div>
  <TheSkills />
  <ThePortfolio />
</template>
<script>
import TheHeader from "./components/TheHeader.vue";
import TheMainPage from "./components/TheMainPage.vue";
import TheWorks from "./components/TheWorks.vue";
import TheAbout from "./components/TheAbout.vue";
import TheHeadingSection from "./components/TheHeadingSection.vue";
import TheSkills from "./components/TheSkills.vue";
import ThePortfolio from "./components/ThePortfolio.vue";
export default {
  components: {
    TheHeader,
    TheMainPage,
    TheWorks,
    TheAbout,
    TheHeadingSection,
    TheSkills,
    ThePortfolio,
  },
  data() {
    return {
      headerClasses: [
        "wrap",
        "flex",
        "flex-col",
        "w-full",
        "lg:flex-row",
        "justify-center ",
        "lg:flex-nowrap",
        "h-full",
        "lg:w-[400%]",
      ],
    };
  },
};
</script>
