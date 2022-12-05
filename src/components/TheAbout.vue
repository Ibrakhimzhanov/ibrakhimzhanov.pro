<template>
  <section id="about" class="panel w-screen lg:h-screen lg:pt-[87px]">
    <div
      class="text-white bg-orange-700 px-5 lg:py-20 lg:h-full w-full font-inter flex flex-col items-center"
    >
      <div
        class="flex lg:flex-row flex-col w-full h-full sm:items-center space-y-10 justify-around lg:pl-6 lg:pr-10"
      >
        <div class="lg:w-[405px] sm:w-4/6">
          <BaseImages name="me.png" class="w-full rounded-none lg:rounded-md" />
        </div>
        <h2
          class="uppercase lg:hidden flex font-drimmerExtraBold text-2xl xl:text-4xl leading-[46px]"
        >
          // Islam Ibragimjanov
        </h2>
        <TheAboutDescription />
      </div>

      <!-- Large FIO (sm = hidden) -->
      <div class="flex w-5/6 lg:justify-around">
        <h2
          class="uppercase lg:flex hidden font-drimmerExtraBold text-2xl lg:text-4xl leading-[46px]"
        >
          // Islam
          <br />
          Ibragimjanov
        </h2>

        <a href="#ww" class="h-full lg:flex hidden items-center">
          <BaseIcon name="right" class="w-[66px] h-[50px] text-white" />
        </a>
      </div>
    </div>
  </section>
</template>
<script>
import BaseIcon from "./BaseIcon.vue";
import BaseImages from "./BaseImages.vue";
import TheAboutDescription from "./TheAboutDescription.vue";
export default {
  components: {
    BaseIcon,
    BaseImages,
    TheAboutDescription,
  },
  data() {
    return {};
  },
};
</script>
