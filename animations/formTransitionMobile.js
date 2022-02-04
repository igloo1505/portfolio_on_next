import { gsap } from "gsap";

const animateNext = () => {
	let tl = gsap.timeline();
	// gsap.to();
	tl.to(".inputContainer-1", {
		y: -100,
		opacity: 0,
		duration: 0.5,
		stagger: 0.2,
		ease: "power3.out",
	});
	tl.to(
		"#right-button-text",
		{
			opacity: 0,
			duration: 0.5,
			ease: "power3.out",
		},
		"-=0.3"
	);
	tl.to(
		".nextButton",
		{
			x: "0",
			duration: 0.3,
			ease: "elastic.out(1, 0.8)",
		},
		"-=0.3"
	);
	tl.fromTo(
		".backButton",
		{
			opacity: 0,
			scaleX: 1,
			visibility: "visible",
			transformOrigin: "left",
			float: "left",
		},
		{
			visibility: "visible",
			width: "100%",
			opacity: 1,
			scaleX: 1,
			duration: 0.6,
			ease: "power3.out",
		}
	);
	tl.to(
		"#right-button-text",
		{
			opacity: 1,
			duration: 0.5,
			ease: "power3.out",
		},
		"-=0.3"
	);
	tl.to(".textAreaContainer", {
		display: "block",
		scaleY: 1,
		opacity: 1,
		duration: 0.5,
		ease: "power3.out",
	});
};

const animateBack = () => {
	let tl = gsap.timeline();
	let em = document
		.getElementById("contact-next-button")
		.getBoundingClientRect();

	tl.to(".textAreaContainer", {
		scaleY: 0,
		opacity: 0,
		display: "none",
		duration: 0.5,
		ease: "power3.out",
	});
	tl.fromTo(
		".inputContainer-1",
		{
			y: -100,
			opacity: 0,
		},
		{
			y: 0,
			opacity: 1,
			duration: 0.5,
			stagger: 0.2,
			ease: "power3.out",
		}
	);
	tl.to("#right-button-text", {
		opacity: 0,
		duration: 0.5,
		ease: "power3.out",
	});
	tl.to(
		".backButton",
		{
			opacity: 0,
			scaleX: 0,
			duration: 0.5,
			ease: "power3.out",
		},
		"-=1.2"
	);
	tl.to(
		".nextButton",
		{
			// transform: translateX(calc(-50% - 0.5rem));
			x: `-${em.width / 2 + 8}px`,
			duration: 0.8,
			ease: "elastic.out(1, 0.6)",
		},
		"-=0.2"
	);
	tl.to("#right-button-text", {
		opacity: 1,
		duration: 1,
		ease: "power3.out",
	});
};

const animateEntrance = (onComplete) => {
	// contact-modal-container
	// contact-modal-backdrop
	let tl = gsap.timeline({
		// onComplete: onComplete,
	});
	tl.to(".contact-modal-container", {
		y: "-50%",
		visibility: "visible",
		opacity: 1,
		duration: 2,
		ease: "elastic.out(1, 0.4)",
	});
};

const animateClose = (onComplete) => {
	// contact-modal-container
	// contact-modal-backdrop
	console.log("Animating close");
	let tl = gsap.timeline({
		onComplete: onComplete,
	});

	tl.to("#contact-modal-container", {
		y: "-100vh",
		// x: "-100vw",
		// scaleX: 0,
		// opacity: 0,
		duration: 0.5,
		ease: "power3.out",
	});
};

export const formTransitionMobile = ({
	onComplete,
	back,
	next,
	close,
	enter,
}) => {
	if (back) {
		return animateBack();
	}
	if (next) {
		return animateNext();
	}
	if (close) {
		return animateClose(onComplete);
	}
	if (enter) {
		return animateEntrance(onComplete);
	}
};
