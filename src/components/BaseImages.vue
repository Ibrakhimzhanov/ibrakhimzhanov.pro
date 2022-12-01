<template>
  <img :class="$attrs.class || ''" :src="`./src/assets/images/${name}`" />
</template>
<script>
export default {
  props: {
    name: String,
  },
  data() {
    return {
      classes: [
        "w-3/4",
        "h-full",
        "border",
        "border-transparent",
        "border-l-white",
        "flex",
        "items-center",
        "justify-center",
      ],
    };
  },
};
</script>
