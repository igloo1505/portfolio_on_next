import React from "react";
import { HeroImagePallet } from "../util/UniversalData";
import PortfolioVideo from "./PortfolioVideo";
import Image from "next/image";
import clsx from "clsx";

const PortfolioPiece = ({ p }) => {
	if (p.orientation === "left") {
		return (
			<div
				className={`portfolio-container portfolio-container-${p.orientation} transitionLeft${p.transitionIndex}`}
			>
				<div className={`portfolio-${p.orientation}-${p.transitionIndex}`}>
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
							<p className="repo-link">
								<a
									href={p.repo}
									style={{
										textDecoration: "none",
										color: "rgb(0, 160, 242)",
									}}
								>
									Repo
								</a>
							</p>
							<p className="project-link">
								<a
									href={p.url}
									style={{
										textDecoration: "none",
										color: "rgb(0, 160, 242)",
									}}
								>
									Live Project
								</a>
							</p>
						</div>
					</div>
				</div>
				<a href={p.url}>
					{p.mediaType === "image" && (
						<Image
							src={p.Image}
							className={`portfolio-right transitionRight${p.transitionIndex}`}
							alt="Portfolio"
						/>
					)}
					{p.mediaType === "video" && <PortfolioVideo piece={p} />}
				</a>
			</div>
		);
	} else if (p.orientation === "right") {
		return (
			<div
				className={`portfolio-container portfolio-container-${p.orientation} transitionLeft${p.transitionIndex}`}
				style={p.isLast ? { paddingBottom: "10px" } : { paddingBottom: "40px" }}
			>
				<a href={p.url}>
					<Image
						className={`portfolio-${
							p.orientation === "right" ? "left" : "right"
						}-${p.transitionIndex}`}
						src={p.Image}
						alt="Portfolio"
					/>
				</a>
				<div
					className={`portfolio-${p.orientation}-${p.transitionIndex} transitionRight${p.transitionIndex}`}
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
							<p className="repo-link">
								<a
									href={p.repo}
									style={{
										textDecoration: "none",
										color: "rgb(0, 160, 242)",
									}}
								>
									Repo
								</a>
							</p>
							<p className="project-link">
								<a
									href={p.url}
									style={{
										textDecoration: "none",
										color: "rgb(0, 160, 242)",
									}}
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
