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
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", parallaxScrollAnim);
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
	let pScroll = window.pageYOffset;
	tLeft.style.transform = `translateY(${pScroll * _rate.left}px)`;
	tRight.style.transform = `translateY(${pScroll * _rate.right}px)`;
};
