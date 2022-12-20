<template>
  <section class="xl:h-screen lg:py-32">
    <div :class="classes">
      <div :class="classesDescription">
        <span :class="classesSpan"> {{ slideNumber }} </span>

        <h5 class="font-drimmerExtraBold lg:text-4xl sm:text-3xl text-2xl">
          {{ title }}
        </h5>
        <p
          class="font-inter sm:text-lg text-xs lg:text-xl text-justify xl:w-[497px] flex sm:px-10"
        >
          {{ description }}
        </p>
      </div>
      <div
        class="flex lg:w-full xl:w-auto justify-center items-center relative top-5 left-2"
      >
        <BaseImages :name="`${title}.svg`" class="" />
      </div>
    </div>
  </section>
</template>
<script>
import BaseImages from "./BaseImages.vue";
export default {
  components: {
    BaseImages,
  },
  props: {
    slideNumber: String,
    title: String,
    description: String,
  },
  data() {
    return {
      classes: [
        // "bg-red-500",
        "flex",
        "lg:flex-row",
        "lg:space-y-0",
        "lg:items-start",
        "lg:justify-around",
        "lg:py-0",
        "lg:px-10",
        "flex-col",
        "items-center",
        "text-white",
        "space-y-10",
        // "h-full",
        "w-full",
        "py-10",
        "px-5",
      ],
      classesDescription: [
        // "bg-blue-600",
        "flex",
        "flex-col",
        "sm:items-center",
        "relative",
        "space-y-6",
        "py-10",
      ],
      classesSpan: [
        // "bg-green-600",
        "text-main-secondary",
        "flex",
        "tracking-[1.5px]",
        "absolute",
        "sm:left-10",
        "left-0",
        "top-0",
        "py-2",
        "after:border",
        "after:border-dashed",
        "after:border-main-secondary",
        "after:absolute after:w-full",
        "after:-bottom-0",
        "after:left-0",
      ],
    };
  },
};
</script>
