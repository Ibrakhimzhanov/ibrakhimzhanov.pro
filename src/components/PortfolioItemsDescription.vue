<template>
  <div :class="classes">
    <span :class="spanClasses">{{ label }} </span>
    <div class="flex items-start w-2/5 flex-col justify-center">
      <p class="text-xl mb-11 relative z-10">{{ description }}</p>
    </div>
    <div class="flex flex-wrap relative z-100">
      <BaseButton title="Кейс behance.net" :link="label" />

      <BaseButton title="Открыть сайт" :link="label" is-view-button />
    </div>
    <div
      class="h-screen absolute right-0 w-2/4 py-[84px] items-center px-5 flex justify-center"
    >
      <div class="bg-cover lg:border-[10px] lg:border-white lg:rounded-[20px]">
        <BaseImages
          class="h-full bg-cover rounded-[8px]"
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
        "py-20",
        "px-5",
      ],
      spanClasses: [
        "relative",
        "top-12",
        "h-screen",
        "z-1",
        "py-2",
        "text-center",
        "text-main",
        "text-2xl",
        "uppercase",
        "before:border-dashed",
        "before:border-main",
        "before:absolute ",
        "before:border",
        "before:w-full",
        "before:top-10",
        "before:left-0",
      ],
    };
  },
};
</script>
