import React, { useState, useEffect, Suspense } from "react";
import { featuredTitleText } from "../util/UniversalData";
import FeaturedImage from "../public/FeaturedImage.png";
import dynamic from "next/dynamic";
// import VideoDemo from "./VideoDemo";
import Image from "next/image";

// const VideoDemo = React.lazy(() => import("./VideoDemo"));

const _rate = {
	left: -0.1,
	right: -0.05,
};

const VideoDemo = dynamic(() => import("./VideoDemo"), {
	ssr: false,
	loading: () => (
		<Image
			className="right transition2"
			src={FeaturedImage}
			alt="App Screenshot"
		/>
	),
});

const FeaturedSection = () => {
	useEffect(() => {
		parallaxScrollAnim();
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", parallaxScrollAnim);
			window.addEventListener("resize", parallaxScrollAnim);
		}
	}, []);

	return (
		<div>
			<section className="featured" id="scroll-to-section-featured">
				<div className="left">
					<div
						className="inner transition2 featuredDescriptionText"
						id="featuredDescriptionText"
					>
						{featuredTitleText()}
					</div>
				</div>
				<VideoDemo _id={"recipeAppDemoVideo"} />
			</section>
		</div>
	);
};

export default FeaturedSection;

const parallaxScrollAnim = () => {
	let tLeft = document.getElementById("featuredDescriptionText");
	let tRight = document.getElementById("recipeAppDemoVideo");
	if (!tLeft || !tRight) return;
	let rect = tLeft.getBoundingClientRect();
	let _oTop = rect.top;
	let _h = rect.height;
	let centeredLow = (window.innerHeight - _oTop + _h) / 1000;

	if (centeredLow >= 0 && centeredLow < 1.5) {
		tLeft.style.opacity = `${centeredLow - 0.3}`;
	}
	if (centeredLow >= 0 && centeredLow < 1) {
		tRight.style.transform = `scale(${centeredLow})`;
	}
	if (centeredLow >= 1) {
		tRight.style.transform = `scale(1)`;
	}
	let centered =
		(window.innerHeight - tLeft.getBoundingClientRect().top) /
		Math.abs(tLeft.offsetTop - window.innerHeight) /
		2;
};
