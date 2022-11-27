<template>
  <section class="trigger">
    <div
      class="customContainer flex items-start lg:flex-row flex-col flex-nowrap w-[460%] bg-[#FFCE1F]"
    >
      <PortfolioItemsHeader :label="portfolioItems[0].label" />
      <PortfolioItems
        v-for="portfolioItem in portfolioItems.slice(0, 3)"
        :key="portfolioItem.label"
        :label="portfolioItem.label"
        :description="portfolioItem.description"
        :id="`panel-${portfolioItem.id}`"
      />
    </div>
  </section>
</template>

<script>
import PortfolioItemsHeader from "./PortfolioItemsHeader.vue";
import PortfolioItems from "./PortfolioItems.vue";
export default {
  components: {
    PortfolioItemsHeader,
    PortfolioItems,
  },
  data() {
    return {
      portfolioItems: [
        {
          label: "chevrolet",
          description:
            "Разработан дизайн сайта автомашины Traverse RS для дилерсой компании «GM - UzAvtoMotors»  Chevrolet Traverse делают любую поездку приятным событием для каждого пассажира.",
          id: "1",
        },
        {
          label: "ils",
          description:
            "Разработка качественного презенатабельного сайта для онлайн школы ILC, которая готовит абитуриентов для поступления в высшее учебное заведение в Республике  Узбекистан.",
          id: "2",
        },
        {
          label: "pikey airlines",
          description:
            "Основной целью проекта была разработка архитектуры бренда авиакомпании вместе с фирменным стилем для Pikey, а также создание веб-сайта.",
          id: "3",
        },
      ],
    };
  },
};
</script>
