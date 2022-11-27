<template>
  <section id="works" :class="classes">
    <WorksPreview
      v-for="workItem in workItems"
      :key="workItem.label"
      :label="workItem.label"
    />
    <WorksPreviewVideo />
  </section>
</template>
<script>
import WorksPreview from "./WorksPreview.vue";
import WorksPreviewVideo from "./WorksPreviewVideo.vue";
export default {
  components: {
    WorksPreview,
    WorksPreviewVideo,
  },
  data() {
    return {
      workItems: [
        {
          label: "chevrolet",
        },
        {
          label: "ils",
        },
        {
          label: "pikey airlines",
        },
      ],
      classes: [
        "panel",
        "lg:h-screen",
        "w-screen",
        "flex",
        "flex-col",
        "items-center",
        "lg:pt-[86px]",
        "pt-0",
      ],
    };
  },
};
</script>
