import React, { useEffect, useState, useRef } from "react";
import clsx from "clsx";
// import dynamic from "next/dynamic";
// const BlogVideo = dynamic(() => import("../public/PoetryBlogV1.mp4"));

const PortfolioVideo = ({ piece, _id, DefaultComponent }) => {
	const videoRef = useRef(null);
	const [canPlayVideo, setCanPlayVideo] = useState(false);

	const playVideo = () => {
		if (videoRef.current) {
			videoRef.current.muted = true;
		}
		videoRef.current?.play();
	};

	useEffect(() => {
		let offset = 0.3;
		playVideo();
	}, []);

	return (
		<div
			className={clsx(
				"portfolio-video-demo-container portfolio-media-right",
				canPlayVideo && "portfolio-video-demo-container-canPlay"
			)}
			style={{
				// margin: "0 1rem",
				borderRadius: "4px",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				position: "relative",
			}}
			id={_id}
		>
			<DefaultComponent />
			<video
				id={`${_id}-video`}
				className={clsx(
					`portfolio-${
						piece.orientation === "right" ? "left" : "right"
					}-6 transition${
						piece.orientation === "right" ? "Left" : "Right"
					}6 portfolio-video`,
					canPlayVideo && "portfolio-video-canPlay"
				)}
				ref={videoRef}
				loop
				muted
				playsInline
				autoPlay
				style={{
					width: "100%",
				}}
				onCanPlayThrough={() => setCanPlayVideo(true)}
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
