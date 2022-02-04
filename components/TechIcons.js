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
import gsap from "gsap";

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
	// useEffect(() => {
	//     setInterval(() => {
	//         setIconToReturn(iconArray[index])
	//         setIconToReturnTwo(iconArray[index + 1])
	//         setIconToReturnThree(iconArray[index + 2])
	//         console.log(iconArray[index + 2])
	//         gsap.from(".techIcons", {
	//           opacity: 50,
	//           x: "-80",
	//           duration: 2,
	//           ease: "slow"
	//         }, "-=2")
	//         if(index === (iconArray.length - 3)){
	//             // eslint-disable-next-line react-hooks/exhaustive-deps
	//             index = 0
	//         }
	//         if(index !== iconArray.length - 3){
	//             index ++
	//         }
	//     }, 4000);
	// }, [])
	return <div className="icon-container">{iconArray[3]}</div>;
};

export default TechIcons;
