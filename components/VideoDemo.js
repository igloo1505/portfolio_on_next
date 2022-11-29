import clsx from "clsx";
import React, { useEffect, useState, useRef } from "react";

const VideoDemo = ({ _id, DefaultComponent }) => {
	const [canPlayThrough, setCanPlayThrough] = useState(false);
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
			className={clsx(
				"video-demo-container",
				canPlayThrough && "canPlayThrough"
			)}
			style={{
				borderRadius: "4px",
				position: "relative",
			}}
		>
			<DefaultComponent />
			<video
				id={_id}
				ref={videoRef}
				loop
				muted
				playsInline
				autoPlay
				style={{
					width: "100%",
					position: "absolute",
					top: 0,
					left: 0,
				}}
				onCanPlayThrough={() => setCanPlayThrough(true)}
			>
				<source src={"/recipeAppDemo.mp4"} type="video/webm" />
				<source src={"/recipeAppDemoCompressed.mp4"} type="video/mp4" />
				<DefaultComponent />
			</video>
		</div>
	);
};

export default VideoDemo;
