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
