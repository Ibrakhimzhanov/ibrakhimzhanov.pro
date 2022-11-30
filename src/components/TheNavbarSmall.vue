<template>
  <navbar>
    <button @click="isOpenSmallNavbar" class="text-white font-inter uppercase">
      Menu
    </button>
    <transition
      enter-active-class="transition-opacity ease-in duration-200"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity ease-out duration-200"
      leave-class="opacity-00"
      leave-to-class="opacity-0"
    >
      <BaseIcon
        @click="closeSmallNavbar"
        v-show="isShown"
        name="x"
        class="text-white top-3 cursor-pointer absolute z-[10] w-[30px]"
      />
    </transition>
    <transition
      enter-active-class="transition-opacity ease-linear duration-200"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity ease-linear duration-200"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <ul :class="classes" v-show="isShown" @keydown.esc="isShown = false">
        <NavbarItemsOverlay is-small :ref="smallNavbar" />
      </ul>
    </transition>
  </navbar>
</template>
<script>
import BaseIcon from "./BaseIcon.vue";
import NavbarItemsOverlay from "./NavbarItemsOverlay.vue";
import TheNavbarSmallOverlay from "./TheNavbarSmallOverlay.vue";
export default {
  components: {
    BaseIcon,
    NavbarItemsOverlay,
    TheNavbarSmallOverlay,
  },
  props: {
    isOpen: Boolean,
  },
  data() {
    return {
      isShown: false,
      classes: [
        "flex",
        "items-center",
        "justify-around",
        "absolute",
        "z-1",
        "-left-2.5",
        "right-0",
        "top-0",
        "w-screen",
        "h-screen",
        "rounded-md",
        "flex-col",
        "bg-main",
        "tracking-widest",
        "uppercase",
      ],
    };
  },
  watch: {
    isOpen() {
      this.$nextTick(() =>
        this.isOpen ? (this.isShown = this.isShown) : (this.isShown = false)
      );
    },
  },
  methods: {
    isOpenSmallNavbar() {
      return (this.isShown = true);
    },
    closeSmallNavbar() {
      return (this.isShown = false);
    },
  },
};
</script>
