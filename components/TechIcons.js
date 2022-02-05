import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHtml5,
	faCss3Alt,
	faReact,
	faJs,
	faNodeJs,
	faGit,
	faNpm,
} from "@fortawesome/free-brands-svg-icons";

const TechIcons = () => {
	const iconArray = [
		<FontAwesomeIcon
			key="htmlIcon"
			className="techIcons htmlIcon"
			icon={faHtml5}
		/>,
		<FontAwesomeIcon
			key="cssIcon"
			className="techIcons cssIcon"
			icon={faCss3Alt}
		/>,
		<FontAwesomeIcon key="jsIcon" className="techIcons jsIcon" icon={faJs} />,
		<FontAwesomeIcon
			key="reactIcon"
			className="techIcons reactIcon"
			icon={faReact}
		/>,
		<FontAwesomeIcon
			key="nodeIcon"
			className="techIcons nodeIcon"
			icon={faNodeJs}
		/>,
		<FontAwesomeIcon
			key="npmIcon"
			className="techIcons npmIcon"
			icon={faNpm}
		/>,
		<FontAwesomeIcon
			key="gitIcon"
			className="techIcons gitIcon"
			icon={faGit}
		/>,
	];

	const [iconToReturn, setIconToReturn] = useState(iconArray[0]);
	const [iconToReturnTwo, setIconToReturnTwo] = useState(iconArray[1]);
	const [iconToReturnThree, setIconToReturnThree] = useState(iconArray[2]);

	// TODO Animate the transition between icons!!
	let index = 1;
	return <div className="icon-container">{iconArray[3]}</div>;
};

export default TechIcons;
