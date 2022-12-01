<template>
  <div class="flex w-5/6 items-center justify-center cursor-pointer">
    <div class="lg:w-3/5 w-full">
      <div style="padding: 56.25% 0 0 0; position: relative">
        <iframe
          src="https://player.vimeo.com/video/425451151?h=156d8d076b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
          style="
            border-radius: 0.5rem;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          "
          title="ILC-presentation"
        ></iframe>
      </div>
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
