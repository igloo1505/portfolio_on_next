import React, { useState, useEffect } from "react";
import "../css/App.css";
import dynamic from "next/dynamic";
import ReactGA from "react-ga";
import ttiPolyfill from "tti-polyfill";
import Navbar from "../components/Navbar";
// import ContactModal from "../components/NewContactModal";
const ContactModal = dynamic(() => import("../components/NewContactModal"));
const Drawer = dynamic(() => import("../components/Drawer"));
const Toast = dynamic(() => import("../components/MessageSuccessToast"));
import { Provider } from "react-redux";
import store from "../state/store";
import { animateOnScroll } from "../animations/scrollTriggerFunctions";

function MyApp({ Component, pageProps }) {
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
				trackingId: "G-R8G93SKSG6",
				standardImplementation: true,
				gaOptions: {
					siteSpeedSampleRate: 100,
					name: "IglooDevelopment",
					cookieDomain: "none",
					storage: "none",
				},
			},
		]);
		var observer = new PerformanceObserver(handlePerformance);
		observer.observe({ entryTypes: ["navigation"] });
	}, []);

	useEffect(() => {
		if (animateOnScroll) {
			animateOnScroll();
		}
	}, [animateOnScroll]);

	useEffect(() => {
		if (typeof window !== "undefined") {
			// animateOnScroll();
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
					<Toast />
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
