<template>
  <div class="flex flex-col items-center space-y-10 mb-10">
    <div
      :class="classes"
      style="
        -webkit-text-stroke-width: 0.6px;
        -webkit-text-stroke-color: #aee2ff;
      "
    >
      Hello, i'm
      <div class="inline-block leading-normal group relative text-main-primary">
        islam Ibragimjanov
        <span :class="spanClasses">
          <MainPageHeaderModal />
        </span>
      </div>
      and Experience about
      <span class="inline-block text-main-primary"> 8 years </span>
    </div>
    <p :class="descriptionClasses">{{ description }}</p>
  </div>
</template>
<script>
import MainPageHeaderModal from "./MainPageHeaderModal.vue";
export default {
  components: {
    MainPageHeaderModal,
  },
  data() {
    return {
      classes: [
        // "bg-red-500",
        "uppercase",
        "text-transparent",
        "text-2xl",
        "text-center",
        "xl:text-[40px]",
        "sm:text-[30px]",
        "lg:max-w-[1111px]",
        "font-drimmer",
        "leading-[60px]",
      ],
      spanClasses: [
        "hidden",
        "sm:group-hover:inline-block",
        "absolute",
        "left-0",
        "overflow-hidden",
        "top-3/4",
        "rounded-2xl",
        "opacity-95",
        "rotate-[-13.31deg]",
        "w-[292px]",
        "h-[384px]",
        "bg-[#ECEAEA]",
      ],
      descriptionClasses: [
        "hidden",
        "sm:flex",
        "max-w-[772px]",
        "text-[#C0E9FF]",
        "font-inter",
        "text-left",
        "sm:text-center",
        "text-[14px]",
        "md:text-[16px]",
        "leading-6",
      ],
      description:
        "I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.",
    };
  },
};
</script>
