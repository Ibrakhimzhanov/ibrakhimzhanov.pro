<template>
  <navbar>
    <ul :class="classes">
      <NavbarItemsOverlay />
    </ul>
  </navbar>
</template>
<script>
import NavbarItemsOverlay from "./NavbarItemsOverlay.vue";

export default {
  components: {
    NavbarItemsOverlay,
  },
  data() {
    return {
      classes: [
        "flex",
        "items-center",
        "tracking-widest",
        "space-x-2 ",
        "md:space-x-0",
        "uppercase",
      ],
    };
  },
};
</script>
