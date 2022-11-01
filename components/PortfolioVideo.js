import React, { useEffect, useState, useRef } from "react";
// import dynamic from "next/dynamic";
// const BlogVideo = dynamic(() => import("../public/PoetryBlogV1.mp4"));

const PortfolioVideo = ({ piece, _id, DefaultComponent }) => {
	const [shouldPlay, setShouldPlay] = useState(false);
	const videoRef = useRef(null);

	const playVideo = () => {
		if (videoRef.current) {
			videoRef.current.muted = true;
		}
		videoRef.current?.play();
	};
	const pauseVideo = () => {
		videoRef.current?.pause();
	};

	useEffect(() => {
		let offset = 0.3;
		let _w = {
			width: window.innerWidth,
			height: window.innerHeight,
		};
		window.addEventListener("scroll", (e) => {
			let video = document.getElementById("recipeAppDemoVideo");

			if (!video) return;
			let _v = video.getBoundingClientRect();

			if ((_w.height - _v.y) / _v.height > offset) {
				playVideo();
			}
		});
	}, []);

	return (
		<div
			className="portfolio-video-demo-container portfolio-media-right"
			style={{
				// margin: "0 1rem",
				borderRadius: "4px",
				// width: "150%",
				// border: "2px solid black",
			}}
			id={_id}
		>
			<video
				id="portfolioAppDemoVideo"
				className="portfolio-right-6 transitionRight6"
				ref={videoRef}
				loop
				muted
				playsInline
				style={{
					width: "100%",
				}}
			>
				<source src={"/poetryBlogDemo.webm"} type="video/webm" />
				<source src={"/poetryBlogDemo.mp4"} type="video/mp4" />
				<DefaultComponent />
			</video>
		</div>
	);
};

export default PortfolioVideo;
