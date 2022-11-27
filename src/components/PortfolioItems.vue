<template>
  <div
    id="panel-3"
    class="flex items-center bg-green-500 justify-center py-10 h-screen w-screen relative"
  >
    <PortfolioItemsDescription :label="label" :description="description" />
    <PortfolioItemsImages :label="label" />
    <a href="#" class="absolute right-7 bottom-4 hidden xl:flex">
      <BaseIcon name="right" is-black />
    </a>
  </div>
</template>
<script>
import BaseIcon from "./BaseIcon.vue";
import PortfolioItemsDescription from "./PortfolioItemsDescription.vue";
import PortfolioItemsImages from "./PortfolioItemsImages.vue";
export default {
  components: {
    BaseIcon,
    PortfolioItemsDescription,
    PortfolioItemsImages,
  },
  props: {
    label: String,
    description: String,
  },
};
</script>
