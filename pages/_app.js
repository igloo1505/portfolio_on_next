import React, { useState, useEffect } from "react";
import "../styles/globals.css";
import "../css/App.css";
import ContactModal from "../components/NewContactModal";
import Navbar from "../components/Navbar";
import Drawer from "../components/Drawer";
import { Provider } from "react-redux";
import store from "../state/store";

function MyApp({ Component, pageProps }) {
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
