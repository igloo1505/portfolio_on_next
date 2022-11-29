import clsx from "clsx";
import Image from "next/image";
import React, { useEffect, useRef, Fragment } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import * as Types from "../state/Types";
import { useLockBodyScroll } from "../util/lockBodyScroll";
// const connector((state, props))

const connector = connect((state, props) => ({
	modalProps: state.mediaModal,
	props: props,
}));

const MediaModal = connector(({ modalProps }) => {
	const mediaRef = useRef(null);
	const dispatch = useDispatch();
	let originalOverflow;
	const resetDocument = () => {
		document.body.style.overflow = originalOverflow;
	};
	useEffect(() => {
		if (modalProps.isOpen) {
			console.log("here");
			originalOverflow = window.getComputedStyle(document.body).overflow;
			document.body.style.overflow = "hidden";
		}
		if (!modalProps.isOpen && originalOverflow) {
			resetDocument();
		}
	}, [modalProps.isOpen]);
	const handleBackdropClick = (params) => {
		resetDocument();
		dispatch({
			type: Types.DISPOSE_MEDIA_MODAL,
		});
	};
	return (
		<div
			className={clsx(
				"mediaModalBackdrop",
				!modalProps.isOpen && "mediaModalBackdropClosed"
			)}
			onClick={handleBackdropClick}
		>
			<div
				className={clsx(
					"mediaModal",
					!modalProps.isOpen && "mediaModal-hide",
					modalProps.isOpen && "mediaModal-show"
				)}
			>
				{modalProps.mediaType === "image" && (
					<Image src={modalProps.Image} objectFit="contain" />
				)}
				{modalProps.mediaType === "video" && (
					<video
						id="modalMediaVideo"
						ref={mediaRef}
						loop
						muted
						playsInline
						autoPlay
					>
						{modalProps?.videoSrc?.map((s, i) => {
							return (
								<source
									src={s.path}
									type={s.type}
									key={`modal-source-${s.gaName}-${i}`}
								/>
							);
						})}
					</video>
				)}
			</div>
		</div>
	);
});

export default MediaModal;
