import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { palette } from "../util/UniversalData";

let grey = palette.grey;

const bShadowWhite = {
	fx: 3,
	fy: 3,
	fos: 5,
	foc: grey[500],
	bx: -3,
	by: -3,
	bos: 5,
	boc: grey[400],
};
const bShadowBlue = {
	fx: 3,
	fy: 3,
	fos: 5,
	foc: grey[600],
	bx: -3,
	by: -3,
	bos: 5,
	boc: grey[500],
};

export const hoverAnimationEnter = (e) => {
	let target = e.target.classList;
};

export const hoverAnimationExit = (e) => {
	if (!e.target.id) return;
	// if (document.getElementById(e.target.id).getBoundingClientRect().width < 100)
	// return;
	let _x = window.getComputedStyle(
		document.getElementById(e.target.id)
	).transform;
	let _float = _x?.split("(")[1]?.split(",")?.[0];

	if (!_float || parseFloat(_float) < 0.75) return;
	console.log("parseFloat(_float): ", parseFloat(_float));
	let _t = document.getElementById(e.target.id).style.transform;
	console.log("_t: ", _t);
	if (e.target.classList.contains("dropShadowBlue")) {
		gsap.to(`#${e.target.id}`, {
			filter: `drop-shadow(${bShadowBlue.fx}px ${bShadowBlue.fy}px ${bShadowBlue.fos}px ${grey[600]}) drop-shadow(${bShadowBlue.bx}px ${bShadowBlue.by}px ${bShadowBlue.bos}px ${grey[500]})`,
			"-webkit-filter": `drop-shadow(${bShadowBlue.fx}px ${bShadowBlue.fy}px ${bShadowBlue.fos}px ${grey[600]}) drop-shadow(${bShadowBlue.bx}px ${bShadowBlue.by}px ${bShadowBlue.bos}px ${grey[500]})`,
			rotateX: 0,
			rotateY: 0,
			duration: 2.5,
			ease: "elastic.out(1.2, 0.2)",
		});
	}
	if (e.target.classList.contains("dropShadowWhite")) {
		gsap.to(`#${e.target.id}`, {
			filter: `drop-shadow(${bShadowWhite.fx}px ${bShadowWhite.fy}px ${bShadowWhite.fos}px ${grey[500]}) drop-shadow(${bShadowWhite.bx}px ${bShadowWhite.by}px ${bShadowWhite.bos}px ${grey[400]})`,
			"-webkit-filter": `drop-shadow(${bShadowWhite.fx}px ${bShadowWhite.fy}px ${bShadowWhite.fos}px ${grey[500]}) drop-shadow(${bShadowWhite.bx}px ${bShadowWhite.by}px ${bShadowWhite.bos}px ${grey[400]})`,
			rotateX: 0,
			rotateY: 0,
			duration: 2.5,
			ease: "elastic.out(1.2, 0.2)",
		});
	}
};
export const hoverAnimationMove = (e) => {
	if (!e.target.id) return;
	let _x = window.getComputedStyle(
		document.getElementById(e.target.id)
	).transform;
	let _float = _x.split("(")[1]?.split(",")?.[0];
	if (!_float) return;
	if (parseFloat(_float) < 0.75) return;
	console.log("parseFloat(_float): ", parseFloat(_float));
	let _t = document.getElementById(e.target.id).style.transform;
	console.log("_t: ", _t);

	let rotateRate = 0.022;
	let rec = document.getElementById(e.target.id).getBoundingClientRect();
	let em = {
		x: rec.left,
		y: rec.top,
		width: rec.width,
		height: rec.height,
		center: {
			x: rec.left + rec.width / 2,
			y: rec.top + rec.height / 2,
		},
	};
	let m = {
		x: e.pageX,
		y: e.pageY,
	};
	let _r = (em.width / 2 + em.height / 2) / 2;
	let factor = 0.7;
	let pX = (m.x - em.center.x) / _r;
	let pY = (m.y - em.center.y) / _r;
	let _nbs = {};
	e.target.classList.contains("dropShadowBlue")
		? (_nbs = {
				fx: bShadowBlue.fx * (1 - pX) * factor,
				fy: bShadowBlue.fy * (1 - pY) * factor,
				fos: bShadowBlue.fos - 2,
				foc: grey[500],
				bx: bShadowBlue.bx * (1 + pX) * factor,
				by: bShadowBlue.by * (1 + pY) * factor,
				bos: bShadowBlue.bos - 2,
				boc: grey[400],
		  })
		: (_nbs = {
				fx: bShadowWhite.fx * (1 - pX) * factor,
				fy: bShadowWhite.fy * (1 - pY) * factor,
				fos: bShadowWhite.fos - 2,
				foc: grey[600],
				bx: bShadowWhite.bx * (1 + pX) * factor,
				by: bShadowWhite.by * (1 + pY) * factor,
				bos: bShadowWhite.bos - 2,
				boc: grey[500],
		  });

	gsap.to(`#${e.target.id}`, {
		filter: `drop-shadow(${_nbs.fx}px ${_nbs.fy}px ${_nbs.fos}px ${_nbs.foc}) drop-shadow(${_nbs.bx}px ${_nbs.by}px ${_nbs.bos}px ${_nbs.boc})`,
		// x: `${pX * rotateRate}%`,
		// y: `${pY * rotateRate}%`,
		rotateX: `${Math.floor(pX * rotateRate * 360)}deg`,
		rotateY: `${Math.floor(pY * rotateRate * 360)}deg`,
		perspective: `${_r * 2}px`,
		duration: 0.5,
		ease: "back.out(2.0)",
	});
};
