<template>
  <div :class="classes">
    {{ label }}
  </div>
</template>
<script>
export default {
  props: {
    label: String,
  },
  data() {
    return {
      classes: [
        "flex",
        "items-center",
        "justify-center",
        "sm:text-[130px]",
        "lg:text-[677.95px]",
        "lg:h-screen",
        "lg:pt-20",
        "lg:w-auto",
        "w-screen",
        "font-oswaldM",
        "text-main",
        "text-[80px]",
        "uppercase",
      ],
    };
  },
};
</script>
