<template>
  <svg
    :class="$attrs.class || classes"
    :fill="$attrs.full || 'currentColor'"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    v-html="path"
  ></svg>
</template>
<script>
import icons from "../icons";

export default {
  props: {
    name: String,
    isBlack: Boolean,
  },
  computed: {
    classes() {
      let widht = ["w-[66px] h-[50px]"];
      return this.isBlack ? [...widht, "text-main"] : [...widht, "text-white"];
    },
  },
  data() {
    return {
      path: icons[this.name],
    };
  },
};
</script>
