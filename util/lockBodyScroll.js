import { useState, useEffect, useLayoutEffect } from "react";

export const useLockBodyScroll = () => {
	useEffect(() => {
		if (typeof window === "undefined") {
			return;
		}
		const originalStyle = window.getComputedStyle(document.body).overflow;
		document.body.style.overflow = "hidden";
		return () => (document.body.style.overflow = originalStyle);
	}, []);
};
