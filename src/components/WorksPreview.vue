<template>
  <div class="flex items-center space-x-5">
    <div class="box h-24 w-[260px]">
      <BaseImages class="rounded-full w-full h-full" :name="`${label}.jpg`" />
    </div>
    <span class="text-main-primary text-2xl font-drimmer">
      {{ label }}
    </span>
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
