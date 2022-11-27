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
        "h-full",
        "border",
        "bg-red-500",
        "border-transparent",
        "border-l-white",
        "w-3/4",
        "flex",
        "items-center",
        "justify-center",
      ],
    };
  },
};
</script>
