<template>
  <a :href="getLink(link)" target="_blank" :class="classes">{{ title }}</a>
</template>
<script>
export default {
  props: {
    isMainButton: Boolean,
    isViewButton: Boolean,
    title: String,
    link: String,
  },
  data() {
    return {
      chevrolet: {
        case: "https://www.behance.net/gallery/101317031/Chevrolet-Traverse-RS-2020-NEW",
        site: "https://www.major-chevrolet.ru/model/chevrolet-traverse/",
      },
      ils: {
        case: "https://www.behance.net/gallery/98286505/Landing-Page-Online-school-ILC",
        site: "https://ils-school.com/",
      },
      pikey: {
        case: "https://www.behance.net/gallery/98935029/Pikey-Airlines-Branding-and-WebSite",
        site: "https://www.britishairways.com/travel/home/public/en_us/",
      },
    };
  },
  methods: {
    getLink(link) {
      if (link === "chevrolet") {
        if (this.isViewButton) {
          return this.chevrolet.site;
        } else {
          return this.chevrolet.case;
        }
      } else if (link === "ils") {
        if (this.isViewButton) {
          return this.ils.site;
        } else {
          return this.ils.case;
        }
      } else if (link === "pikey airlines") {
        if (this.isViewButton) {
          return this.pikey.site;
        } else {
          return this.pikey.case;
        }
      }
    },
  },
  computed: {
    classes() {
      const buttonMain = [
        "py-4",
        "px-4",
        "sm:px-7",
        "text-xs",
        "sm:text-[16px]",
        "text-main-primary",
        "font-drimmer",
        "border",
        "border-main-primary",
        "rounded-[50px]",
        "hover:border-transparent",
        "hover:bg-main-primary",
        "hover:text-main",
        "transition",
        "ease-linear",
        "duration-100",
      ];
      const portfolioButton = [
        this.isViewButton ? "lg:px-12" : "lg:px-8",
        "py-5",
        "px-5",
        "mr-4",
        "uppercase",
        "text-main",
        "text-md",
        "border",
        "border-main",
        "rounded-full",
        "hover:bg-main",
        "hover:text-white",
      ];
      return this.isMainButton ? [...buttonMain] : [...portfolioButton];
    },
  },
};
</script>
