import React from "react";

const ContactSection = ({ styles }) => {
	return (
		<div className={styles.basicDetailsSection}>
			<div className={styles.name}>Andrew Mueller</div>
			<div className={styles.contactDetails}>
				<ul>
					<li>
						<a href="tel:414-530-3108">(414) 530-3108</a>
					</li>
					<li>
						<a href="mailto:Andrew@igloodevelopment.dev">
							Andrew@igloodevelopment.dev
						</a>
					</li>
					<li>
						<a href="https://www.github.com/igloo1505">github.com/igloo1505</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ContactSection;
