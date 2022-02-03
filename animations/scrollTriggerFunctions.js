import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const animateOnScroll = () => {
  gsap.registerPlugin(ScrollTrigger);
  //   gsap.set(".square-anim", {
  //     transformStyle: "preserve-3d",
  //     transformPerspective: 1000,
  //   });
  //   const child = document.querySelector(`.hero-design:nth-child(${c})`);
  gsap.set(".squareFlip *", {
    transformStyle: "preserve-3d",
    backfaceVisibility: "hidden",
    rotationY: -180,
  });
  let tl = gsap.timeline();
  tl.from(".content", {
    y: "-30%",
    opacity: 0,
    duration: 2,
    ease: "Power4.easeOut",
  });
  tl.from(
    ".staggeredEntrance",
    {
      y: "-50",
      opacity: 0,
      stagger: 0.3,
      duration: 2,
      ease: "Power4.easeOut",
    },
    "-=1.5"
  );

  tl.from(
    ".hero-design",
    {
      opacity: 0,
      y: 50,
      ease: "Power4.easeOut",
      duration: 1,
    },
    "-=2"
  );

  gsap.from(".square-anim", {
    stagger: 0.2,
    scale: 0.1,
    duration: 2.5,
    // ease: "back.out(1.7)"
    ease: "elastic.out(1, 0.3)",
  });

  gsap.from(".squareFlip", {
    stagger: 0.2,
    scale: 0.1,
    duration: 2.5,
    // ease: "back.out(1.7)"
    ease: "elastic.out(1, 0.3)",
  });

  gsap.from(".transition2", {
    scrollTrigger: {
      trigger: ".transition2",
      start: "top 85%",
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: 0.3,
  });

  gsap.from(".transition3", {
    scrollTrigger: {
      trigger: ".transition3",
      start: "top 85%",
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: 0.3,
  });

  gsap.from(".portfolio-left-4", {
    scrollTrigger: {
      trigger: ".transitionLeft4",
      start: "top 90%",
    },
    x: -100,
    opacity: 0,
    duration: 1.2,
    stagger: 0.3,
  });
  gsap.from(".transitionRight4", {
    scrollTrigger: {
      trigger: ".transitionRight4",
      start: "top 90%",
    },
    x: 100,
    opacity: 0,
    duration: 1.2,
    stagger: 0.3,
  });

  gsap.from(".portfolio-left-5", {
    scrollTrigger: {
      trigger: ".transitionLeft5",
      start: "top 90%",
    },
    x: -100,
    opacity: 0,
    duration: 1.2,
    stagger: 0.3,
  });
  gsap.from(".transitionRight5", {
    scrollTrigger: {
      trigger: ".transitionRight5",
      start: "top 90%",
    },
    x: 100,
    opacity: 0,
    duration: 1.2,
    stagger: 0.3,
  });

  gsap.from(".portfolio-left-6", {
    scrollTrigger: {
      trigger: ".transitionLeft6",
      start: "top 90%",
    },
    x: -100,
    opacity: 0,
    duration: 1.2,
    stagger: 0.3,
  });

  gsap.from(".transitionRight6", {
    scrollTrigger: {
      trigger: ".transitionRight6",
      start: "top 90%",
    },
    x: 100,
    opacity: 0,
    duration: 1.2,
    stagger: 0.3,
  });

  ScrollTrigger.create({
    start: 0,
    onUpdate: (self) => {
      let y = document.scrollingElement.scrollTop;
      let Y = window.pageYOffset;
      let emHeight = 434;
      let scaleOnScroll = (emHeight - Y) / emHeight;
      gsap.to(".square-anim", {
        // rotation: self.progress * 850,
        // duration: 1,
        // rotationY: 180,
        // rotationY: 180,
        scaleX: scaleOnScroll,
        scaleY: scaleOnScroll,
        ease: "expo.easeOut",
      });

      gsap.to(".circleFadeOut", {
        scaleX: scaleOnScroll,
        scaleY: scaleOnScroll,
      });
    },
  });
};
