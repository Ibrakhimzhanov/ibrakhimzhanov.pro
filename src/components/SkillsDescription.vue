<template>
  <section class="lg:h-screen">
    <div :class="classes">
      <div
        class="bg-white lg:flex hidden opacity-50 absolute right-[45%] h-full w-1"
      ></div>
      <div :class="classesDescription">
        <span :class="classesSpan"> {{ slideNumber }} </span>

        <h5 class="font-drimmerExtraBold lg:text-4xl text-2xl">{{ title }}</h5>
        <p
          class="font-inter text-xs lg:text-xl text-justify xl:w-[497px] sm:w-3/4"
        >
          {{ description }}
        </p>
      </div>
      <div class="flex items-center justify-center w-full">
        <BaseImages :name="`${title}.svg`" class="w-[196px] lg:w-full" />
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
        "space-y-10",
        "lg:space-y-0",
        "flex-col",
        "sm:items-center",
        "items-start",
        "lg:justify-around",
        "text-white",
        "h-full",
        "py-10",
        "lg:py-0",
        "lg:px-20",
        "px-5",
      ],
      classesDescription: [
        // "bg-blue-600",
        "flex",
        "flex-col",
        "sm:items-center",
        "relative",
        "space-y-6",
      ],
      classesSpan: [
        // "bg-green-600",
        "text-main-secondary",
        "xl:text-[16px]",
        "flex",
        "tracking-[1.5px]",
        "absolute",
        "sm:left-[10%]",
        "-top-10",
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
