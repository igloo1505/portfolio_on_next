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
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
			id={_id}
		>
			<video
				id="portfolioAppDemoVideo"
				className={`portfolio-${
					piece.orientation === "right" ? "left" : "right"
				}-6 transition${piece.orientation === "right" ? "Left" : "Right"}6`}
				ref={videoRef}
				loop
				muted
				playsInline
				style={{
					width: "100%",
				}}
			>
				{piece.videoSrc.map((s, i) => {
					return (
						<source
							src={s.path}
							type={s.type}
							key={`video-source-${s.gaName}-${i}`}
						/>
					);
				})}
				<DefaultComponent />
			</video>
		</div>
	);
};

export default PortfolioVideo;
