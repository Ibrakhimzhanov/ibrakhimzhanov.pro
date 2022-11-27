<template>
  <section
    id="skills"
    class="panel flex flex-col items-center justify-center relative w-screen lg:h-screen px-[70px] py-[87px]"
  >
    <h1
      class="xl:text-[130px] lg:text-[80px] text-[50px] font-drimmerExtraBold text-white"
    >
      my skills
    </h1>
    <a href="#ww" class="absolute right-28 bottom-14">
      <BaseIcon
        name="right"
        class="lg:w-[66px] lg:h-[50px] w-[45px] rotate-90 text-white"
      />
    </a>
  </section>
</template>
<script>
import BaseIcon from "./BaseIcon.vue";

export default {
  components: {
    BaseIcon,
  },
};
</script>
