<template>
  <div :class="classes">
    <div class="space-y-9 mt-10 lg:mt-0 lg:space-y-0">
      <span :class="spanClasses">{{ label }} </span>
      <p class="lg:text-xl text-sm relative z-10">{{ description }}</p>
    </div>

    <div
      class="flex items-center justify-center w-full flex-wrap relative z-100"
    >
      <BaseButton title="Кейс behance.net" :link="label" />

      <BaseButton title="Открыть сайт" :link="label" is-view-button />
    </div>
    <div class="items-center lg:px-5 flex justify-center">
      <div class="lg:border-[10px] lg:border-white lg:rounded-[20px]">
        <BaseImages
          class="bg-orange-400 lg:rounded-[8px]"
          :name="`${label}.jpg`"
        />
      </div>
    </div>
  </div>
</template>
<script>
import BaseButton from "./BaseButton.vue";
import BaseImages from "./BaseImages.vue";

export default {
  components: {
    BaseButton,
    BaseImages,
  },
  props: {
    label: String,
    description: String,
  },
  data() {
    return {
      classes: [
        "bg-red-500",
        "flex",
        "justify-between",
        "items-start",
        // "relative",
        "font-inter",
        "flex-col",
        "w-screen",
        "h-screen",
        "py-10",
        // "space-y-10",
        "lg:px-5",
        "pl-5",
        "pr-8",
      ],
      spanClasses: [
        "relative",
        "lg:top-12",
        "top-0",
        "h-screen",
        "z-1",
        "py-2",
        "text-center",
        "text-main",
        "lg:text-2xl",
        "text-xl",
        "uppercase",
        "before:border-dashed",
        "before:border-main",
        "before:absolute ",
        "before:border-b-2",
        "before:w-full",
        "before:top-10",
        "before:left-0",
      ],
    };
  },
};
</script>
