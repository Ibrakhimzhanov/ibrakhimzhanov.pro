<template>
  <section
    id="about"
    class="panel w-screen lg:h-screen flex items-center lg:pt-[87px] lg:pb-0 lg:px-5 py-10"
  >
    <div
      class="text-white font-inter lg:pl-2 lg:pr-6 pr-10 pl-5 w-full flex flex-col items-center justify-around space-y-20 xl:space-y-32"
    >
      <div class="w-full flex lg:flex-row flex-col">
        <div class="w-full flex items-center justify-start">
          <BaseImages name="me.png" class="rounded-xl" />
        </div>
        <div
          class="flex xl:flex-row w-full flex-col items-center justify-between"
        >
          <div class="relative flex justify-center lg:px-5">
            <span :class="spanClasses">{{ title.eng.about }}</span>
            <p
              class="flex text-lg xl:text-[20px] xl:leading-8 xl:w-[652px] text-justify mt-14 lg:mt-10"
            >
              {{ title.eng.description }}
            </p>
          </div>
        </div>
      </div>

      <div
        class="xl:px-[240px] lg:w-full w-3/4 lg:flex hidden justify-start relative lg:px-10"
      >
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
import BaseImages from "./BaseImages.vue";

export default {
  components: {
    BaseIcon,
    BaseImages,
  },
  data() {
    return {
      spanClasses: [
        "text-main-secondary",
        "tracking-[2px]",
        "xl:flex",
        "hidden",
        "absolute",
        "-left-20",
        "-top-6",
        "py-2",
        "after:border-dashed",
        "after:border",
        "after:border-main-secondary",
        "after:absolute",
        "after:w-full",
        "after:-bottom-0",
        "after:left-0",
      ],
      title: {
        ru: {
          description:
            "Я веб-разработчик и дизайнер, который занимается созданием веб-сайтов с 2016 года. Я специализируюсь на доступности, производительности и удобстве использования, не жертвуя творческим потенциалом. Вероятно, я не типичный разработчик, работающий с Node.JS, PHP или С#  и настраивающий докеры, но я проектирую, погружаясь в суть задачи, настраивая  от размера шрифтов и обдумывая макеты, в это время вы можете видеть меня таким(~_^). Я стремлюсь создавать масштабируемый код, пишу код так, чтобы после меня коллеги не говорили: и как мне это разгребать?🤦. А наоборот говорили:  О как все понятно написано👌, чой обкэ, ща решим. Опираясь при этом только на нужные инструменты.",
          about: "О себе",
        },
        eng: {
          description:
            "I am a web developer and designer who has been creating websites since 2016. I specialize in accessibility, performance and usability without sacrificing creativity. I'm probably not a typical developer working with Node.JS, PHP or C# and customizing dockers, but I design, diving into the essence of the task, adjusting from font size and thinking about layouts, at this time you can see me like this (~_^). I strive to create scalable code, I write code so that my colleagues don't say after me: and how do I clean it up?🤦. But on the contrary, they said: Oh, how everything is clearly written, choy ob-ke, we'll decide now. Relying only on the right tools.",
          about: "About",
        },
      },
    };
  },
};
</script>
