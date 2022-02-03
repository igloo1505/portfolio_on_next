import React, { useState, useEffect } from "react";
import "../styles/globals.css";
import "../css/App.css";
// import ContactModal from "../components/NewContactModal";
import ContactModal from "../components/ContactModal";
import Navbar from "../components/Navbar";
import Drawer from "../components/Drawer";
import { Provider } from "react-redux";
import store from "../state/store";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

function MyApp({ Component, pageProps }) {
	gsap.registerPlugin(ScrollToPlugin);
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
