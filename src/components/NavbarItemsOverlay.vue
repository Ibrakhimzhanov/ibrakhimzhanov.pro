<template>
  <NavbarItems
    v-for="listItem in listItems"
    :key="listItem.label"
    :label="listItem.label"
    :slideNumber="listItem.slideNumber"
    :is-small="isSmall"
  />
</template>
<script>
import NavbarItems from "./NavbarItems.vue";
export default {
  components: {
    NavbarItems,
  },
  props: {
    isSmall: Boolean,
  },
  data() {
    return {
      listItems: [
        {
          label: "home",
        },
        {
          label: "work",
        },
        {
          label: "about",
        },
        {
          label: "experience",
        },
        {
          label: "contact",
        },
      ],
    };
  },
};
</script>
