<template>
  <section
    id="about"
    class="panel w-screen m-0 lg:h-screen flex items-center py-10 lg:pt-[87px] px-5"
  >
    <div
      class="text-white xl:container font-inter w-full flex flex-col xl:justify-center space-y-20 xl:space-y-32"
    >
      <div
        class="flex xl:flex-row flex-col items-center justify-between xl:space-x-[50px]"
      >
        <img src="../assets/images/me.png" class="rounded-xl w-1/5 xl:w-auto" />
        <div class="relative flex justify-center">
          <span :class="spanClasses">О себе</span>
          <p
            class="text-lg xl:text-[20px] xl:leading-8 xl:w-[652px] w-3/4 text-justify mt-14 lg:mt-10"
          >
            {{ description }}
          </p>
        </div>
      </div>
      <div class="xl:px-[240px] w-3/4 lg:flex hidden justify-center relative">
        <div
          class="uppercase font-drimmerExtraBold text-2xl xl:text-4xl leading-[46px]"
        >
          <h2>
            // Islam
            <br />
            Ibragimjanov
          </h2>
        </div>
        <a href="#ww" class="absolute right-0 h-full flex items-center">
          <BaseIcon name="right" class="w-[66px] h-[50px] text-white" />
        </a>
      </div>
    </div>
  </section>
</template>
<script>
import BaseIcon from "./BaseIcon.vue";

export default {
  components: {
    BaseIcon,
  },
  data() {
    return {
      spanClasses: [
        "text-main-secondary",
        "tracking-[2px]",
        "xl:flex",
        "hidden",
        "absolute",
        "left-2/4",
        "xl:-left-[5.49rem]",
        "py-2",
        "after:border-dashed",
        "after:border",
        "after:border-main-secondary",
        "after:absolute",
        "after:w-full",
        "after:-bottom-0",
        "after:left-0",
      ],
      description:
        "Я веб-разработчик и дизайнер, который занимается созданием веб-сайтов с 2016 года. Я специализируюсь на доступности, производительности и удобстве использования, не жертвуя творческим потенциалом. Вероятно, я не типичный разработчик, работающий с Node.JS, PHPH или С#  и настраивающий докеры, но я проектирую, погружаясь в суть задачи, настраивая  от размера шрифтов и обдумывая макеты, в это время вы можете видеть меня таким(~_^). Я стремлюсь создавать масштабируемый код, пишу код так, чтобы после меня коллеги не говорили: и как мне это разгребать?🤦. А наоборот говорили:  О как все понятно написано👌, чой обкэ, ща решим. Опираясь при этом только на нужные инструменты.",
    };
  },
};
</script>
