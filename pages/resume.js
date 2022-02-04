import React, { useEffect, useState } from "react";
import "../css/Resume.module.css";
import ResumeComponent from "../components/resume/ResumeComponent";
import { connect } from "react-redux";

const Resume = ({
	state: {
		navbar: { height: navbarHeight },
	},
}) => {
	const [extraStyles, setExtraStyles] = useState({});
	useEffect(() => {
		if (navbarHeight) {
			setExtraStyles({
				padding: `${navbarHeight}px 0 2rem 0`,
			});
		}
	}, []);

	return (
		<div style={extraStyles}>
			<ResumeComponent />
		</div>
	);
};

const mapStateToProps = (state, props) => ({
	state: state,
});

export default connect(mapStateToProps)(Resume);
