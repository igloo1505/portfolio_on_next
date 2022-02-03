import React, { Fragment } from "react";
import { HeroImagePallet } from "../util/UniversalData";

const HeroSideImage = () => {
	const { white, secondary, secondaryTwo, secondaryThree, contrast, subtle } =
		HeroImagePallet;
	return (
		<div>
			<svg
				className="hero-design"
				xmlns="http://www.w3.org/2000/svg"
				width="456"
				height="434"
				viewBox="0 0 456 434"
			>
				<g id="HeroSideImage" transform="translate(-1092 -216)">
					<Fragment
					// className="squareFlip"
					// style={{ width: 114, height: "109" }}
					>
						<rect
							className="square-anim leftSquare leftSquare1"
							id="Rectangle_7"
							data-name="Rectangle 7"
							width="114"
							height="109"
							rx="23"
							transform="translate(1202 324)"
							fill={white}
						/>
					</Fragment>
					<rect
						className="square-anim rightSquare rightSquare1"
						id="Rectangle_8"
						data-name="Rectangle 8"
						width="114"
						height="109"
						rx="23"
						transform="translate(1316 437)"
						fill={contrast}
					/>
					<rect
						className="square-anim leftSquare leftSquare2"
						id="Rectangle_3"
						data-name="Rectangle 3"
						width="114"
						height="109"
						rx="23"
						transform="translate(1210 541)"
						fill={white}
					/>
					<rect
						className="square-anim leftSquare leftSquare3"
						id="Rectangle_4"
						data-name="Rectangle 4"
						width="114"
						height="109"
						rx="23"
						transform="translate(1092 428)"
						fill={contrast}
					/>
					<rect
						className="square-anim rightSquare rightSquare2"
						id="Rectangle_6"
						data-name="Rectangle 6"
						width="114"
						height="109"
						rx="23"
						transform="translate(1434 325)"
						fill={secondaryTwo}
					/>
					<rect
						className="square-anim rightSquare rightSquare3"
						id="Rectangle_5"
						data-name="Rectangle 5"
						width="114"
						height="109"
						rx="23"
						transform="translate(1320 216)"
						fill={secondary}
					/>
					<path
						className="circleFadeOut"
						id="Path_6"
						data-name="Path 6"
						d="M53.785,0c28.593,0,49.843,23.179,49.843,51.772a51.772,51.772,0,0,1-51.772,51.772c-28.593,0-49.843-23.179-49.843-51.772A51.772,51.772,0,0,1,53.785,0Z"
						transform="translate(1205.186 436.532)"
						fill={secondaryThree}
					/>
					<path
						className="circleFadeOut"
						id="Path_3"
						data-name="Path 3"
						d="M53.785,0c28.593,0,49.843,23.179,49.843,51.772a51.772,51.772,0,0,1-51.772,51.772c-28.593,0-49.843-23.179-49.843-51.772A51.772,51.772,0,0,1,53.785,0Z"
						transform="translate(1318.186 329.532)"
						fill={subtle}
					/>
				</g>
			</svg>
		</div>
	);
};

export default HeroSideImage;
