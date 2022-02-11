import { gsap } from "gsap";

export const shouldHideBodyOverflow = (hide) => {
	let em = document.getElementById("bodyHtml");
	if (!em) return;
	if (hide === true) {
		em.classList.add("bodyHtmlHidden");
	}
	if (hide === false) {
		em.classList.remove("bodyHtmlHidden");
	}
};

export const getViewportDimensions = () => {
	let vh = Math.max(document.documentElement.clientHeight);
	let vw = Math.max(document.documentElement.clientWidth);
	return {
		height: vh,
		width: vw,
	};
};

export const moveToSectionBelow = () => {
	let vp = getViewportDimensions();

	gsap.to(".gallerySection", {
		duration: 0.5,
		transform: `translateY(-${vp.height}px)`,
	});
};

export const moveToSectionRight = () => {
	let vp = getViewportDimensions();
	gsap.to(".gallerySection", {
		duration: 0.5,
		transform: `translateX(-${vp.width}px)`,
	});
};

export const getNavbarHeight = () => {
	let com = document.getElementsByClassName("nav-container");
	let rect = com[0].getBoundingClientRect();
	//   let rec = com.getClientRect();
	//
	return {
		// background: "#0080F0",
		height: `calc(100vh - ${rect.height}px)`,
	};
};

export const getDimensionsFromClassName = (className) => {
	let em = document.getElementsByClassName(className);
	if (!em[0]) {
		return {};
	} else {
		em = em[0];
		let dims = em.getBoundingClientRect();
		return dims;
	}
};
