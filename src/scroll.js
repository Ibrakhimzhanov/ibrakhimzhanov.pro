import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let ww = window.innerWidth;
let mm = gsap.matchMedia();
let sections = gsap.utils.toArray(".panel");
let container = document.querySelector(".wrap");
let customContainer = document.querySelector(".customContainer");
mm.add("(min-width: 1024px)", () => {
  gsap.to(".boxes", {
    duration: 5,
    ease: "none",
    x: -ww,
    repeat: -1,
  });
  console.log(">>>>>One<<<<<");
  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: container,
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
      invalidateOnRefresh: true,
      end: () => "+=" + container.offsetWidth,
    },
  });
  gsap.to(customContainer, {
    x: () =>
      -(customContainer.scrollWidth - document.documentElement.clientWidth) +
      "px",
    ease: "none",
    duration: 4,
    scrollTrigger: {
      // markers: true,
      trigger: ".trigger",
      invalidateOnRefresh: true,
      pin: true,
      scrub: 1,
      // snap: 1,

      end: () => "+=" + customContainer.offsetWidth,
    },
  });
});
//! Two
