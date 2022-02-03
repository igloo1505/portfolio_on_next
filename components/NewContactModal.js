import React, { useState, useEffect } from "react";
import Axios from "axios";
import ReactGA from "react-ga";
import { connect } from "react-redux";

const NewContactModal = (...errThang) => {
	console.log("errThang: ", errThang);
	return (
		<div className="contact-modal-container">
			<div></div>
		</div>
	);
};

const mapStateToProps = (state, props) => ({
	...state,
	...props,
});

export default connect(mapStateToProps)(NewContactModal);
