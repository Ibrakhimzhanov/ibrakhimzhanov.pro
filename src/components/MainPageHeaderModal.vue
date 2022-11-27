<template>
  <span class="inline-block rotate-[7deg] w-[258px] h-[320px] relative">
    <BaseImages
      name="author.jpg"
      class="grayscale rotate-[-7.51deg] top-3 -right-1 rounded-2xl opacity-95 absolute w-[230px] h-[320px]"
    />

    <p
      class="text-main absolute -bottom-14 rotate-[-7.51deg] left-16 font-inter normal-case text-[14px]"
      style="
        -webkit-text-stroke-width: 0px;
        -webkit-text-stroke-color: transparent;
      "
    >
      Waw, there I am😎
    </p>
    <div
      style="
        -webkit-text-stroke-width: 0px;
        -webkit-text-stroke-color: transparent;
      "
      class="-rotate-[97.8deg] border border-transparent border-b-black border-opacity-50 overflow-hidden whitespace-nowrap block w-[385px] font-inter normal-case relative -bottom-[179px] right-[197px]"
    >
      <div
        class="m-0 p-0 animate-scroll text-main inline-block pl-[100%] text-[14px]"
      >
        Hello 🙋 Hello 🙋Hello 🙋Hello 🙋Hello 🙋Hello 🙋Hello 🙋
      </div>
    </div>
    <BaseImages name="arrow.jpg" class="absolute -bottom-10 left-14" />
  </span>
</template>
<script>
import BaseImages from "./BaseImages.vue";
export default {
  components: {
    BaseImages,
  },
};
</script>
