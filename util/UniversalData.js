import triviaScreenShot from "../public/triviaScreenShot.png";
import jeopardyScreenShot from "../public/jeopardyScreenShot.png";

export const heroText = () => {
	return (
		<h1 className="staggeredEntrance">
			Web Experiences: <br /> Designed Beautifully, <br /> Function Flawlessly
		</h1>
	);
};
export const HeroImagePallet = {
	white: "#fff",
	secondary: "#00a0f2",
	secondaryTwo: "#0cf7ff",
	secondaryThree: "#13f9ff",
	contrast: "#f15ed0",
	subtle: "#fdf58a",
};
export const AppColors = {
	navBarColor: "#0080F0",
	heroBodyColor: "#008EEB",
	skillsBodyColor: "#13F9FF",
	promptColor: "#F8F886",
	subtitleColor: "#00B0F8",
	descriptionTextColor: "#3B3B3B",
};

export const promptText = () => {
	return <p className="staggeredEntrance">Learn More Below</p>;
};
export const featuredTitleText = () => {
	return (
		<>
			<p className="subtitle" style={{ color: AppColors.subtitleColor }}>
				Featured App
			</p>
			<span className="featured-title">Radish.io Social Network for Cooks</span>
			<p
				className="featured-desc main-featured-desc"
				style={{ color: AppColors.descriptionTextColor }}
			>
				{
					"This was just a project to add some new technologies to my resume while having fun with the UI. I began this project months ago, and would really only come back to it when I wanted to try something new. Built using Next.js, Three.js, react-spring, GSAP, Material-UI, AWS, mogodb, and more. This was built with 'stand-alone' PWA functionality in mind."
				}
			</p>
			<div className="featured-link-container">
				<p
					style={{ color: AppColors.navBarColor, padding: 0, marginBottom: 0 }}
				>
					Very much a work in Progress
				</p>
				<a href="https://github.com/igloo1505/restaurant_template">
					<p
						className="featured-repo-button"
						href="https://github.com/igloo1505/restaurant_template"
					>
						<span>Repo</span>
						<div className="featured-button-underline" />
					</p>
				</a>
			</div>
		</>
	);
};

export const skillsArray = [
	{
		index: 0,
		classIndex: "one",
		title: "Modern Frontend Design",
		type: "FrontendDesign",
		desc: "I strive to build unique online experiences directly from code, using the most modern technology and UI trends. Technologies like Facebook's React framework, Progressive Web Apps to allow functioning offline, and various charting libraries allow the modern web to not only be descriptive, detailed and informative, but perform efficiently.",
	},
	{
		index: 1,
		classIndex: "two",
		title: "iOS Development",
		type: "MobileDevelopment",
		desc: "When a browser based website just isn't enough, a native mobile application can help to keep customers connected, employees in touch while on the move, and all of your data just one touch away. I have the most experience building for iOS, but can develop for Android as well using cross-platform technologies like React Native.",
	},
	{
		index: 2,
		classIndex: "three",
		title: "Business Integration",
		type: "BusinessTechnologies",
		desc: "By integrating with powerful analytics tools, clients are able to track dozens of valuable data points in real time. This can provide insight into which marketing strategies are providing the highest ROI, the on-site behavior of each visitor, and can be integrated with both Google's own dashboard, as well as a custom built Admin dashboard depending on your needs.",
	},
	{
		index: 3,
		classIndex: "four",
		title: "Secure data management",
		type: "secureBackend",
		desc: "Whether integrating with third party authentication through Google, Apple, and Facebook or creating a completely independent authentication process, you can be sure that only you have access to sensitive information while customers and employees can easily find and access the data they need to keep your business running smoothly.",
	},
];

export const portfolioArray = [
	{
		index: 0,
		transitionIndex: 4,
		mediaType: "image",
		orientation: "left",
		imageName: "triviaScreenShot",
		gaName: "Trivia Game",
		imagePath: "/public/triviaScreenShot.png",
		Image: triviaScreenShot,
		url: "https://javascripttrivia.herokuapp.com/signIn",
		repo: "https://github.com/igloo1505/Trivia",
		appName: "Trivia for Developers",
		subTitle: "Javascript Trivia",
		description:
			"Trivia game for entry level developers, built with and based on Javascript, DBMS's and general development knowledge. A few questions in the default database are relevant, most are just interesting.",
		isLast: false,
	},
	{
		index: 1,
		transitionIndex: 5,
		mediaType: "image",
		orientation: "right",
		gaName: "Jeopardy Game",
		imageName: "jeopardyScreenShot",
		imagePath: "/public/jeopardyScreenShot.png",
		Image: jeopardyScreenShot,
		url: "https://igloo-jeopardy.herokuapp.com/login",
		repo: "https://github.com/igloo1505/GenericJeopardy/tree/master",
		appName: "Mock Jeopardy",
		subTitle: "React based trivia game",
		description:
			"A simple Jeopardy game built with React, Node and Express using the Context API. A version of this attached to a different database was originally built for a therapist working with disabled adults.",
		isLast: false,
	},
	{
		index: 2,
		transitionIndex: 6,
		mediaType: "video",
		orientation: "left",
		gaName: "Poetry Blog",
		imageName: "poetryBlogV1",
		videoSrc: "/poetryBlogV1.mp4",
		// Video: PoetryBlogV1,
		// url: "https://github.com/igloo1505/GenericJeopardy/tree/master",
		repo: "https://github.com/igloo1505/poetry_blog",
		appName: "Poetry Blog",
		subTitle: "A quick weekend blog",
		description:
			"This was originally designed as a blog for a friend of mine in a different field. Because I didn't want to link to someone's personal blog, I modified this version to be a generic poetry blog. Built on Next.js using MongoDB, Material-UI, and GSAP.",
		isLast: true,
	},
];

export const socialLinks = {
	github: {
		link: "https://www.github.com/igloo1505",
		display: "list-item",
	},
	linkedIn: {
		link: "https://www.linkedin.com/in/andrew-mueller-689626198/",
		display: "list-item",
	},
	blog: {
		link: "https://one-hundred-days-blog.herokuapp.com/",
		display: "none",
		// display: "list-item"
	},
};

export const palette = {
	grey: {
		50: "#fafafa",
		100: "#f5f5f5",
		200: "#eeeeee",
		300: "#e0e0e0",
		400: "#bdbdbd",
		500: "#9e9e9e",
		600: "#757575",
		700: "#616161",
		800: "#424242",
		900: "#212121",
		A100: "#d5d5d5",
		A200: "#aaaaaa",
		A400: "#303030",
		A700: "#616161",
	},
};
