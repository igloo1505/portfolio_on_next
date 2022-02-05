import React, { useEffect, useState } from "react";
import "../css/Resume.module.css";
import ResumeComponent from "../components/resume/ResumeComponent";
import { connect } from "react-redux";
import Script from "next/script";

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
			<Script id="google-analytics" strategy="afterInteractive">
				{`
					<!-- Global site tag (gtag.js) - Google Analytics -->
  					window.dataLayer = window.dataLayer || [];
  					function gtag(){dataLayer.push(arguments);}
  					gtag('js', new Date());
			  		gtag('config', 'UA-181494074-1');
				`}
			</Script>
			<ResumeComponent />
		</div>
	);
};

const mapStateToProps = (state, props) => ({
	state: state,
});

export default connect(mapStateToProps)(Resume);
