import React, { useState, useEffect, Suspense } from "react";
import { featuredTitleText } from "../util/UniversalData";
import FeaturedImage from "../public/FeaturedImage.png";
import dynamic from "next/dynamic";
// import VideoDemo from "./VideoDemo";
import Image from "next/image";
import { isMobileOnly } from "react-device-detect";
// const VideoDemo = React.lazy(() => import("./VideoDemo"));
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
	const [shouldShowVideo, setShouldShowVideo] = useState(true);
	useEffect(() => {
		// setShouldShowVideo(!isMobileOnly);
		console.log("isMobileOnly: ", isMobileOnly);
	}, []);

	return (
		<div>
			<section className="featured" id="scroll-to-section-featured">
				<div className="left">
					<div className="inner transition2 featuredDescriptionText">
						{featuredTitleText()}
					</div>
				</div>
				{shouldShowVideo ? (
					<VideoDemo />
				) : (
					<Image
						className="right transition2"
						src={FeaturedImage}
						alt="App Screenshot"
					/>
				)}
			</section>
		</div>
	);
};

export default FeaturedSection;
