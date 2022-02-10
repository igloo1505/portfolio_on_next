import React, { useEffect, useState } from "react";
import { HeroImagePallet } from "../util/UniversalData";
import PortfolioVideo from "./PortfolioVideo";
import Image from "next/image";
import clsx from "clsx";
import ReactGA from "react-ga4";
import { isMobile } from "react-device-detect";

const _buttonBreakpoint = 1150;

const PortfolioPiece = ({ p, scroll, index }) => {
	const [hoverState, setHoverState] = useState({
		link: false,
		repo: false,
	});

	const [points, setPoints] = useState({
		link: "",
		repo: "",
		linkDims: {
			width: "100px",
			heigth: "50px",
		},
		repoDims: {},
	});

	const handleHover = (type, status) => {
		console.log("type, status: ", type, status);
		console.log("hoverState: ", hoverState);
		if (typeof window === "undefined") return;
		if (isMobile) {
			console.log("isMobile: ", isMobile);
			setHoverState({
				...hoverState,
				link: true,
			});
		}
		if (!isMobile)
			setHoverState({
				...hoverState,
				[type]: status,
			});
	};

	useEffect(() => {
		if (isMobile) {
			console.log("isMobile: ", isMobile);
			setHoverState({
				...hoverState,
				link: true,
			});
		}
		if (typeof window !== "undefined") {
			window.addEventListener("resize", () => {
				if (window.innerWidth < _buttonBreakpoint || isMobile) {
					setHoverState({
						...hoverState,
						link: true,
					});
				}
			});
		}
	}, []);

	useEffect(() => {
		if (typeof window !== "undefined") {
			let newPoints = {
				link: "",
				repo: "",
			};
			let _rect = document.getElementById(`project-link-${index}`);
			console.log("_rect: ", _rect);
			if (!_rect) return;
			let dims = _rect.getBoundingClientRect();
			newPoints.link = `${dims.width},1 ${dims.width},${dims.height} 1,${dims.height} 1,1 ${dims.width},1`;
			newPoints.linkDims = {
				width: dims.width,
				height: dims.height,
			};
			setPoints(newPoints);
		}
	}, []);

	const logLiveView = () => {
		ReactGA.event({
			category: "Portfolio Piece",
			action: "Live View",
			label: p.gaName,
		});
	};
	const logRepoView = () => {
		ReactGA.event({
			category: "Portfolio Piece",
			action: "Repo View",
			label: p.gaName,
		});
	};

	useEffect(() => {
		animatePiece({
			scrollData: scroll,
			index: index,
			orientation: p.orientation,
			idLeft: `portfolio-${p.orientation}-${index}`,
			idRight: `portfolio-media-${p.orientation}-${index}`,
		});
	}, [scroll]);

	if (p.orientation === "left") {
		return (
			<div
				className={`portfolio-container portfolio-container-${p.orientation} transitionLeft${p.transitionIndex}`}
				id={`portfolio-piece-${index}`}
			>
				<div
					className={`portfolio-${p.orientation}-${p.transitionIndex} portfolio-desc-left`}
					id={`portfolio-${p.orientation}-${index}`}
				>
					<div className="inner">
						<p
							className="subtitle"
							style={{ color: HeroImagePallet.secondary }}
						>
							{p.appName}
						</p>
						<p className="featured-title">{p.subTitle}</p>
						<p
							className={clsx(
								"featured-desc",
								`featured-desc-${p.orientation}`
							)}
						>
							{p.description}
						</p>
						<div className="portfolio-link-container">
							<p
								className={clsx("repo-link", hoverState.repo && "hovered")}
								id={`repo-link-${index}`}
								onMouseEnter={() => handleHover("repo", true)}
								onMouseLeave={() => handleHover("repo", false)}
							>
								<a
									href={p.repo}
									style={{
										textDecoration: "none",
										color: "rgb(0, 160, 242)",
									}}
									onClick={logRepoView}
								>
									Repo
								</a>
							</p>
							{p.url ? (
								<p
									className={clsx("project-link", hoverState.link && "hovered")}
									id={`project-link-${index}`}
									onMouseEnter={() => handleHover("link", true)}
									onMouseLeave={() => handleHover("link", false)}
								>
									<svg
										width={points.linkDims.width}
										height={points.linkDims.height}
										viewBox={`0 0 ${points.linkDims.width} ${points.linkDims.height}`}
										className={clsx("svgBorder", hoverState.link && "hovered")}
									>
										<polyline
											points={points.link}
											className="bg-line"
											id={`bg-line-${index}`}
										/>
										<polyline
											points={points.link}
											className="hl-line"
											id={`hl-line-${index}`}
										/>
									</svg>
									<a
										href={p.url}
										className={clsx("link-aTag", hoverState.link && "hovered")}
										onClick={logLiveView}
									>
										Live Project
									</a>
								</p>
							) : (
								<p
									className="project-link"
									style={{
										display: "flex",
										flexDirection: "row",
										flexWrap: "wrap",
										justifyContent: "center",
										alignItems: "center",
										textAlign: "center",
									}}
								>
									<a
										href={p.url}
										style={{
											textDecoration: "none",
											color: "rgb(0, 160, 242)",
											textAlign: "center",
										}}
										onClick={logLiveView}
									>
										Live Project Coming soon
									</a>
								</p>
							)}
						</div>
					</div>
				</div>
				<a href={p.url} onClick={logLiveView}>
					{p.mediaType === "image" && (
						<Image
							src={p.Image}
							className={`portfolio-right transitionRight${p.transitionIndex}`}
							alt="Portfolio"
							id={`portfolio-media-${p.orientation}-${index}`}
						/>
					)}
					{p.mediaType === "video" && (
						<PortfolioVideo
							piece={p}
							_id={`portfolio-media-${p.orientation}-${index}`}
						/>
					)}
				</a>
			</div>
		);
	} else if (p.orientation === "right") {
		return (
			<div
				className={`portfolio-container portfolio-container-${p.orientation} transitionLeft${p.transitionIndex}`}
				style={p.isLast ? { paddingBottom: "10px" } : { paddingBottom: "40px" }}
				id={`portfolio-piece-${index}`}
			>
				<a href={p.url} onClick={logLiveView}>
					<Image
						className={`portfolio-${
							p.orientation === "right" ? "left" : "right"
						}-${p.transitionIndex} portfolio-media-left`}
						src={p.Image}
						alt="Portfolio"
						id={`portfolio-media-${p.orientation}-${index}`}
					/>
				</a>
				<div
					className={`portfolio-${p.orientation}-${p.transitionIndex} transitionRight${p.transitionIndex} portfolio-desc-right`}
					id={`portfolio-${p.orientation}-${index}`}
				>
					<div className="inner">
						<p
							className="subtitle"
							style={{ color: HeroImagePallet.secondary }}
						>
							{p.appName}
						</p>
						<p className="featured-title">{p.subTitle}</p>
						<p
							className={clsx(
								"featured-desc",
								`featured-desc-${p.orientation}`
							)}
						>
							{p.description}
						</p>
						<div className="portfolio-link-container">
							<p
								className={clsx("repo-link", hoverState.repo && "hovered")}
								id={`repo-link-${index}`}
								onMouseEnter={() => handleHover("repo", true)}
								onMouseLeave={() => handleHover("repo", false)}
							>
								<a
									href={p.repo}
									style={{
										textDecoration: "none",
										color: "rgb(0, 160, 242)",
									}}
									onClick={logRepoView}
								>
									Repo
								</a>
							</p>
							<p
								className={clsx("project-link", hoverState.link && "hovered")}
								id={`project-link-${index}`}
								onMouseEnter={() => handleHover("link", true)}
								onMouseLeave={() => handleHover("link", false)}
							>
								<svg
									width={points.linkDims.width}
									height={points.linkDims.height}
									viewBox={`0 0 ${points.linkDims.width} ${points.linkDims.height}`}
									className={clsx("svgBorder", hoverState.link && "hovered")}
								>
									<polyline
										points={points.link}
										className="bg-line"
										id={`bg-line-${index}`}
									/>
									<polyline
										points={points.link}
										className="hl-line"
										id={`hl-line-${index}`}
									/>
								</svg>
								<a
									href={p.url}
									className={clsx("link-aTag", hoverState.link && "hovered")}
									onClick={logLiveView}
								>
									Live Project
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default PortfolioPiece;

const animatePiece = ({ scrollData, index, idLeft, idRight, orientation }) => {
	let piece = document.getElementById(`portfolio-piece-${index}`);
	let left = document.getElementById(idLeft);
	let right = document.getElementById(idRight);
	let rect = piece.getBoundingClientRect();
	let _oBottom = rect.bottom;
	let _h = rect.height;
	let scale = window.innerHeight * 0.1 + _h / 2;
	let start = Math.abs(window.innerHeight - piece.offsetTop);
	let end = start + scale;
	let _diff = end - start;
	let x = (window.scrollY - start) / _diff;
	let _val = (1 - x) * 70;
	if (index === 0) {
	}
	if (x === 0) {
		left.style.transform = `translateX(-70vw)`;
		right.style.transform = `translateX(70vw)`;
		left.style.opacity = 0;
		right.style.opacity = 0;
	}
	if (x >= 1) {
		left.style.transform = `translateX(0)`;
		right.style.transform = `translateX(0)`;
		left.style.opacity = 1;
		right.style.opacity = 1;
	}
	if (x >= 0 && x < 1) {
		left.style.opacity = `${x}`;
		right.style.opacity = `${x}`;
		if (orientation === "left") {
			left.style.transform = `translateX(-${_val}vw)`;
			right.style.transform = `translateX(${_val}vw)`;
		}
		if (orientation === "right") {
			left.style.transform = `translateX(${_val}vw)`;
			right.style.transform = `translateX(-${_val}vw)`;
		}
	}
};
