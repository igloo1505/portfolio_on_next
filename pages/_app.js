import React, { useState, useEffect } from "react";
import "../css/App.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import dynamic from "next/dynamic";
import ReactGA from "react-ga4";
import { Analytics } from "@vercel/analytics/react";
import ttiPolyfill from "tti-polyfill";
import Navbar from "../components/Navbar";
// import ContactModal from "../components/NewContactModal";
import Script from "next/script";
const ContactModal = dynamic(() => import("../components/NewContactModal"));
const Drawer = dynamic(() => import("../components/Drawer"));
const Toast = dynamic(() => import("../components/MessageSuccessToast"));
import { Provider } from "react-redux";
import store from "../state/store";
import { animateOnScroll } from "../animations/scrollTriggerFunctions";

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		ReactGA.initialize([
			{
				debug: true,
				trackingId: "G-R8G93SKSG6",
				// standardImplementation: true,
				gaOptions: {
					// siteSpeedSampleRate: 100,
					debug: true,
					name: "IglooDevelopment",
					// cookieDomain: "none",
					// storage: "none",
					// tracker: "iglooDevTracker",
				},
			},
		]);
	}, []);

	useEffect(() => {
		if (animateOnScroll) {
			animateOnScroll();
		}
	}, [animateOnScroll]);

	return (
		<>
			<Provider store={store}>
				<Script id="google-analytics" strategy="afterInteractive">
					{`
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
			  
				gtag('config', 'G-R8G93SKSG6');
				`}
				</Script>
				<Analytics />
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
