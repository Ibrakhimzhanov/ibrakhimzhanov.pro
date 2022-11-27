<template>
  <div
    class="flex lg:items-center items-start justify-center lg:h-full lg:px-5 lg:py-0 px-10 py-32"
  >
    <div class="flex items-center justify-center cursor-pointer">
      <div class="absolute">
        <BaseIcon name="play" class="w-24 h-24 text-main-primary" />
      </div>
      <img
        src="https://picsum.photos/id/111/1048/248"
        class="rounded-2xl border-2 border-main-primary"
      />
    </div>
  </div>
</template>
<script>
import BaseIcon from "./BaseIcon.vue";

export default {
  components: {
    BaseIcon,
  },
};
</script>
