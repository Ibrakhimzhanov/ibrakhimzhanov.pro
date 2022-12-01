<template>
  <section id="works" :class="classes">
    <div class="work flex w-full h-[133px] bg-white overflow-hidden">
      <div
        class="boxes flex space-x-20 pl-[100%] items-center whitespace-nowrap md:text-2xl md:px-16"
      >
        <WorksPreview
          v-for="workItem in workItems"
          :key="workItem.label"
          :label="workItem.label"
        />
      </div>
    </div>
    <div class="flex items-center bg-orange-400 justify-center w-full h-full">
      <WorksPreviewVideo />
    </div>
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
        "h-screen",
        "w-screen",
        "flex",
        "flex-col",
        "items-center",
        "pt-[86px]",
      ],
    };
  },
};
</script>
