<template>
  <div class="work hidden lg:flex w-full h-[115px] bg-white overflow-hidden">
    <div
      class="boxes flex flex-col items-center justify-between h-full w-full px-40 md:text-2xl md:px-16"
    >
      <div class="box flex items-center space-x-2">
        <BaseImages class="rounded-2xl" :name="`${label}.jpg`" />
        <span class="text-main-primary text-2xl font-drimmer">
          {{ label }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import BaseImages from "./BaseImages.vue";

export default {
  props: {
    label: String,
  },
  components: {
    BaseImages,
  },
};
</script>
