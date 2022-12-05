<template>
  <div class="items-center lg:px-5 flex justify-center">
    <div class="lg:border-[10px] lg:border-white lg:rounded-[20px]">
      <BaseImages
        class="bg-orange-400 lg:rounded-[8px]"
        :name="`${label}.jpg`"
      />
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
