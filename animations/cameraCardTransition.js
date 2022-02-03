import { gsap } from "gsap";
import { getDimensionsFromClassName } from "../utilityFunctions";

const reAlignLayoutToOpen = () => {
  let pcLayout = document.getElementsByClassName("product");
  const productCardLayout = pcLayout[0].getBoundingClientRect();

  let layoutTimeline = gsap.timeline();

  let dims = getDimensionsFromClassName("photo-container");
  layoutTimeline.to(".photo-container", {
    width: "100%",
    transform: `translateX(-${dims.width / 2}px)`,
    height: "100%",
    borderRadius: "6px",
    boxShadow: "4px 4px 25px -2px rgb(0 0 0 / 30%)",
    duration: 1,
    ease: "Power4.easeOut",
  });

  layoutTimeline.to(
    ".imageWrapper",
    {
      transform: "translate3d(-100px, -20px, 0px) scale(1.2)",
    },
    "-=1"
  );

  gsap.to(".product__info", {
    padding: "0.8em 1em",
    position: "relative",
    display: "block",
    zIndex: -5,
    background: "#fff",
    borderRadius: "10px",
    transform: `translateX(${dims.width / 2}px)`,
    duration: 1,
    ease: "Power4.easeOut",
  });
};

const reAlignLayoutToClosed = () => {
  console.log("realign to closed layout here");
  let layOutTimeLine = gsap.timeline();
  let dims = getDimensionsFromClassName("photo-container");
  layOutTimeLine.to(".photo-container", {
    width: "100%",
    transform: `translateX(0px)`,
    height: "100%",
    borderRadius: "6px",
    boxShadow: "4px 4px 25px -2px rgb(0 0 0 / 30%)",
    duration: 1,
    ease: "Power4.easeOut",
  });
  layOutTimeLine.to(
    ".imageWrapper",
    {
      transform: `translateX(0px)`,
    },
    "-=1"
  );
  gsap.to(".product__info", {
    padding: "0.8em 1em",
    position: "relative",
    display: "block",
    zIndex: -5,
    background: "#fff",
    borderRadius: "10px",
    transform: `translateX(0px)`,
    duration: 1,
    ease: "Power4.easeOut",
  });
};

export const transitionToOpen = (wasOpen) => {
  if (wasOpen === false) {
    reAlignLayoutToOpen();
  } else if (wasOpen === true) {
    reAlignLayoutToClosed();
  }
};
