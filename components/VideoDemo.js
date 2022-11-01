import React, { useEffect, useState, useRef } from "react";

const VideoDemo = ({ _id, DefaultComponent }) => {
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

			// video.play();
			if ((_w.height - _v.y) / _v.height > offset) {
				playVideo();
			}
		});
	}, []);

	return (
		<div
			className="video-demo-container"
			style={{
				borderRadius: "4px",
			}}
		>
			<video
				id={_id}
				ref={videoRef}
				loop
				muted
				playsInline
				style={{
					width: "100%",
				}}
			>
				<source src={"/recipeAppDemo.mp4"} type="video/webm" />
				<source src={"/recipeAppDemoCompressed.mp4"} type="video/mp4" />
				<DefaultComponent />
			</video>
		</div>
	);
};

export default VideoDemo;
