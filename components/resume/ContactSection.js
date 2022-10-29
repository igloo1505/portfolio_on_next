import React from "react";
import ReactGA from "react-ga4";

const ContactSection = ({ styles }) => {
	const logPhoneClick = () => {
		ReactGA.event({
			category: "Contact",
			action: "Phone Click",
			label: "Phone Click",
		});
	};
	const logGitView = () => {
		ReactGA.event({
			category: "Navigation",
			action: "Github View",
			label: "Github",
		});
	};
	const logEmailClick = () => {
		ReactGA.event({
			category: "Contact",
			action: "Email Click",
			label: "Email Click",
		});
	};
	return (
		<div className={styles.basicDetailsSection}>
			<div className={styles.name}>Andrew Mueller</div>
			<div className={styles.contactDetails}>
				<ul>
					<li>
						<a href="tel:414-530-3108" onClick={logPhoneClick}>
							(414) 530-3108
						</a>
					</li>
					<li>
						<a href="mailto:Aiglinski@icloud.com" onClick={logEmailClick}>
							Aiglinski@icloud.com
						</a>
					</li>
					<li>
						<a href="https://www.github.com/igloo1505" onClick={logGitView}>
							github.com/igloo1505
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ContactSection;
