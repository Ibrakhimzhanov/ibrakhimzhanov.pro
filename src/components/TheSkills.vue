<template>
  <SkillsDescription
    v-for="item in items.slice(0, 6)"
    :key="item.Id"
    :slideNumber="item.slideNumber"
    :title="item.title"
    :description="item.description"
    :imageName="item.imageName"
  />
</template>

<script>
import SkillsDescription from "./SkillsDescription.vue";

export default {
  components: {
    SkillsDescription,
  },
  data() {
    return {
      items: [
        {
          Id: 0,
          slideNumber: "6/01",
          title: "Javascript",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          Id: 1,
          slideNumber: "6/02",
          title: "Java",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          Id: 3,
          slideNumber: "6/03",
          title: "VueJs",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          Id: 4,
          slideNumber: "6/04",
          title: "HTML5",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          Id: 5,
          slideNumber: "6/05",
          title: "Css3",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          Id: 6,
          slideNumber: "6/06",
          title: "Oracle",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
      ],
    };
  },
};
</script>
