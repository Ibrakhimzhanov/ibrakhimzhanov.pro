<template>
  <li>
    <a href="#" :class="linkClasses">
      <span :class="boxClasses"></span>
      <span class="text-white group-hover:text-gray-900">{{ label }}</span>
      <div :class="arrowClasses"></div>
    </a>
  </li>
</template>
<script>
export default {
  props: {
    label: String,
    isSmall: Boolean,
  },
  data() {
    return {
      boxClasses: [
        "inline-block",
        "transition",
        "ease-linear",
        "duration-100",
        "bg-main-primary",
        "group-hover:bg-white",
        this.isSmall ? "w-6" : "w-3",
        this.isSmall ? "h-4" : "h-2",
        this.isSmall ? "rounded-full" : "rounded-md",
        "mr-2",
      ],
      arrowClasses: [
        this.isSmall ? "hidden" : "flex",
        "absolute",
        "group-focus:border-[10px]",
        "border-transparent",
        "border-t-[10px]",
        "border-t-main-primary",
        "-bottom-6",
        "transition",
        "ease-linear",
        "duration-100",
      ],
    };
  },
  computed: {
    linkClasses() {
      return [
        // "bg-red-500",
        "flex",
        "items-center",
        "justify-center",
        "relative",
        this.isSmall ? "px-40" : "px-6",
        "py-4",
        this.isSmall ? "text-lg" : "text-sm",
        "font-inter",
        "group",
        "hover:bg-main-primary",
        "rounded-xl",
        "outline-none",
        "transition",
        "ease-linear",
        "duration-100",
      ];
    },
  },
};
</script>
