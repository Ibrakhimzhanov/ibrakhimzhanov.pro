<template>
  <section class="lg:h-screen">
    <div :class="classes">
      <div :class="classesDescription">
        <span :class="classesSpan"> {{ slideNumber }} </span>
        <h5 class="font-drimmerExtraBold text-[35px]">{{ title }}</h5>
        <p
          class="font-inter text-sm lg:text-[20px] text-justify w-4/5 lg:w-[497px]"
        >
          {{ description }}
        </p>
      </div>
      <BaseImages :name="`${title}.svg`" class="lg:flex hidden" />
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
        "flex",
        "items-center",
        "lg:justify-around",
        "justify-between",
        "container",
        "text-white",
        "h-full",
        "py-20",
        "lg:px-5",
        "lg:py-0",
      ],
      classesDescription: [
        "flex",
        "flex-col",
        "justify-center",
        "items-center",
        "lg:items-start",
        "relative",
        "lg:w-2/4",
        "space-y-4",
      ],
      classesSpan: [
        "text-main-secondary",
        "text-[16px]",
        "lg:flex",
        "hidden",
        "tracking-[1.5px]",
        "absolute",
        "left-0",
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
