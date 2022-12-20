<template>
  <section
    id="skills"
    class="panel flex flex-col items-center justify-center relative w-screen lg:h-screen px-[70px] py-[87px] lg:px-0 lg:mt-0 mt-10"
  >
    <h1
      class="xl:text-9xl whitespace-nowrap lg:text-8xl sm:text-5xl text-4xl font-drimmerExtraBold text-white"
    >
      my skills
    </h1>
    <a href="#ww" class="absolute lg:flex hidden right-28 bottom-14">
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
