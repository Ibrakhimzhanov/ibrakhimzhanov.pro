<template>
  <div
    id="panel-3"
    class="items-center justify-center h-full flex flex-col lg:flex-row bg-[#FFCE1F] py-10 xl:h-screen relative"
  >
    <div :class="headerClasses">
      {{ label }}
    </div>
    <div :class="classes">
      <div
        class="flex flex-col lg:justify-around lg:h-full lg:py-20 lg:w-4/6 xl:w-3/6 space-y-10 lg:space-y-0"
      >
        <div class="space-y-9 mt-10 lg:mt-0">
          <span :class="spanClasses">About the project </span>
          <p class="lg:text-xl sm:text-xl text-sm sm:px-10 relative z-10">
            {{ description }}
          </p>
        </div>

        <div
          class="flex lg:justify-start items-center justify-center w-full flex-wrap relative z-100"
        >
          <BaseButton title="Кейс behance.net" :link="label" />

          <BaseButton title="Открыть сайт" :link="label" is-view-button />
        </div>
      </div>

      <div class="lg:px-5 lg:w-3/5">
        <div class="xl:border-[10px] xl:border-white xl:rounded-[20px]">
          <BaseImages class="lg:rounded-[8px]" :name="`${label}.jpg`" />
        </div>
      </div>
    </div>
    <a href="#" class="absolute right-7 bottom-4 hidden xl:flex">
      <BaseIcon name="right" is-black />
    </a>
  </div>
</template>
<script>
import BaseIcon from "./BaseIcon.vue";
import BaseButton from "./BaseButton.vue";
import BaseImages from "./BaseImages.vue";
export default {
  components: {
    BaseIcon,
    BaseButton,
    BaseImages,
  },
  props: {
    label: String,
    description: String,
  },
  data() {
    return {
      headerClasses: [
        // "bg-red-500",
        "flex",
        "whitespace-nowrap",
        "items-center",
        "justify-center",
        "text-7xl",
        "lg:text-[677.95px]",
        "text-main",
        "lg:h-screen",
        "lg:w-auto",
        "w-screen",
        "font-oswaldM",
        "uppercase",
      ],
      classes: [
        // "bg-orange-400",
        "flex",
        "flex-col",
        "lg:flex-row",
        "lg:items-center",
        "lg:px-5",
        "lg:ml-10",
        "justify-around",
        "items-start",
        "font-inter",
        "w-screen",
        "lg:h-screen",
        "space-y-20",
        "ml-0",
        "pl-5",
        "pr-8",
      ],
      spanClasses: [
        "relative",
        "top-0",
        "sm:left-10",
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
