/* styles */
import React, { useState } from "react";
import styles from './index.scss';


const titleColor = {
	width: "minContent",
	["align-self"]: "center",
	["margin-left"]: "250px",
	["margin-top"]: "3vh",
	["grid-row-start"]: 1,
	["font-family"]: "'Roboto', sansSerif",
	["font-size"]: "13vw",
	["font-style"]: "normal",
	["font-weight"]: "bold",
	["line-height"]: "90%",
	["letter-spacing"]: "0.065em",
	["word-wrap"]: "break-word",
	width: "60vw",
	background: "linear-gradient(to right, #000000 335px, #BAFFF7 335px, #BAFFF7 990px, #000000 990px)",
	WebkitTextFillColor: "transparent",
	WebkitBackgroundClip: "text",
}

const titleColor2 = {
	width: "minContent",
	alignSelf: "center",
	marginLeft: "250px",
	marginTop: "3vh",
	gridRowStart: 1,
	fontFamily: "'Roboto', sansSerif",
	fontSize: "13vw",
	fontStyle: "normal",
	fontWeight: "bold",
	lineHeight: "90%",
	letterSpacing: "0.065em",
	["word-wrap"]: "break-word",
	width: "60vw",
	background: "linear-gradient(to right, #000000 335px, #CD83DF 335px, #CD83DF 990px, #000000 990px)",
	["-webkit-text-fill-color"]: "transparent",
	["-webkit-background-clip"]: "text",
}

const subtitleColor = {
	["align-self"]: "center",
	width: "50vw",
	["margin-left"]: "250px",
	["font-family"]: "'Roboto', sans-serif",
	["font-style"]: "normal",
	["font-weight"]: "bold",
	["line-height"]: "142.69%",
	["letter-spacing"]: "0.285em",
	["font-size"]: "3.1vw",
	["grid-row-start"]: 2,
	background: "linear-gradient(to right, #000000 335px, #BAFFF7 335px, #BAFFF7 990px, #000000 990px)",
	WebkitTextFillColor: "transparent",
	WebkitBackgroundClip: "text",
}

const subtitleColor2 = {
	["align-self"]: "center",
	width: "50vw",
	["margin-left"]: "250px",
	["font-family"]: "'Roboto', sans-serif",
	["font-style"]: "normal",
	["font-weight"]: "bold",
	["line-height"]: "142.69%",
	["letter-spacing"]: "0.285em",
	["font-size"]: "3.1vw",
	["grid-row-start"]: 2,
	background: "linear-gradient(to right, #000000 335px, #CD83DF 335px, #CD83DF 990px, #000000 990px)",
	["-webkit-text-fill-color"]: "transparent",
	["-webkit-background-clip"]: "text",
}

const box = {
	position: "absolute",
	zIndex: "-2",
	backgroundColor: "#D1B5DB",
	width: "655px",
	height: "70vw",
	left: "585px",
	top: "0",
}

const box2 = {
	position: "absolute",
	zIndex: "-2",
	backgroundColor: "#FF9A9A",
	color: "#CD83DF",
	width: "655px",
	height: "70vw",
	left: "585px",
	top: "0",
}

const style = {
    position: "absolute",
    top: "3vw",
    left: "90vw",
    borderRadius: "100%",
    width: "100px",
    height: "100px",
    fontFamily: "'Roboto', sansSerif",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "105.2%",
    letterSpacing: "0.065em",
    backgroundColor: "#D1B5DB",
    color: "#BAFFF7"
}

const style2 = {
    position: "absolute",
    top: "3vw",
    left: "90vw",
    borderRadius: "100%",
    width: "100px",
    height: "100px",
    fontFamily: "'Roboto', sansSerif",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "105.2%",
    letterSpacing: "0.065em",
    backgroundColor: "#FF9A9A",
    color: "#CD83DF"
}



const HeadlineModule = ({ title, subtitle, button }) => {
	const [color, setColor] = useState(true);

	function toggle() {
        setColor(!color);
    }

	return (
	<div className={styles.wrapper}>
		<div className={styles.box} style={!color ? box : box2} onClick={() => toggle()}></div>
		<h1 className={styles.title} data-content={title} style={!color ? titleColor : titleColor2} onClick={() => toggle()}>{title}</h1>
		<h2 className={styles.subtitle} style={!color ? subtitleColor : subtitleColor2} onClick={() => toggle()}>{subtitle}</h2>
		<button style={!color ? style : style2} onClick={() => toggle()}>{button}</button>
	</div>
	);
};

export default HeadlineModule;