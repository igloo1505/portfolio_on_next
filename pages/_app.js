import React, { useState, useEffect } from "react";
import "../css/MaterializeModal.css";
import "../css/App.css";
// import ContactModal from "../components/NewContactModal";
import ReactGA from "react-ga";
import ttiPolyfill from "tti-polyfill";
import ContactModal from "../components/ContactModal";
import Navbar from "../components/Navbar";
import Drawer from "../components/Drawer";
import { Provider } from "react-redux";
import store from "../state/store";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
import { EaselPlugin } from "gsap/dist/EaselPlugin";
import { animateOnScroll } from "../animations/scrollTriggerFunctions";

// import M from "materialize-css/dist/js/materialize.min.js";

function MyApp({ Component, pageProps }) {
	gsap.registerPlugin(
		EaselPlugin,
		MotionPathPlugin,
		ScrollToPlugin,
		ScrollTrigger
	);

	function handlePerformance(list) {
		list.getEntries().forEach((entry) => {
			ReactGA.timing({
				category: "Load Performance",
				variable: "Server Latency",
				value: entry.responseStart - entry.requestStart,
			});
			ReactGA.timing({
				category: "Load Performance",
				variable: "Download Time",
				value: entry.responseEnd - entry.responseStart,
			});
			ReactGA.timing({
				category: "Load Performance",
				variable: "Total App Load Time",
				value: entry.responseEnd - entry.requestStart,
			});
		});
	}

	useEffect(() => {
		ReactGA.initialize([
			{
				trackingId: "G-YJK7R2Y1TL",
				gaOptions: {
					siteSpeedSampleRate: 100,
					name: "GAtracker",
					cookieDomain: "none",
					storage: "none",
				},
			},
			{
				trackingId: "UA-181494074-1",
				standardImplementation: true,
				gaOptions: {
					siteSpeedSampleRate: 100,
					name: "OriginalTracker",
					cookieDomain: "none",
					storage: "none",
				},
			},
		]);
		var observer = new PerformanceObserver(handlePerformance);
		observer.observe({ entryTypes: ["navigation"] });
	}, []);
	useEffect(() => {
		if (typeof window !== "undefined") {
			animateOnScroll();
			ttiPolyfill.getFirstConsistentlyInteractive().then((tti) => {
				ReactGA.timing({
					category: "Load Performance",
					variable: "Time to Interactive",
					value: tti,
				});
			});
		}
	}, []);
	return (
		<>
			<Provider store={store}>
				<div id="drawer-outer-container-id">
					<Drawer />
					<Navbar currentPath="landing" />
					<div id="drawer-page-wrapper">
						<ContactModal />
						<Component {...pageProps} />
					</div>
				</div>
			</Provider>
		</>
	);
}

export default MyApp;
