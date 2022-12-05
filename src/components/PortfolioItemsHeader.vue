<!-- <template>
  <div :class="classes">
    {{ label }}
  </div>
</template> -->
<script>
export default {
  props: {
    label: String,
  },
  data() {
    return {
      headerClasses: [
        "flex",
        "whitespace-nowrap",
        "items-center",
        "justify-center",
        "text-5xl",
        "py-",
        "sm:text-9xl",
        "lg:text-[677.95px]",
        "text-main",
        "pt-20",
        "lg:h-screen",
        "lg:w-auto",
        "w-screen",
        "font-oswaldM",
        "uppercase",
      ],
    };
  },
};
</script>
