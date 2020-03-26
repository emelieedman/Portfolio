import React, { useState } from "react";

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
    backgroundColor: "#36BAAA",
    color: "#F9E2FF"
}
 

const ToggleButton = ({ title }) => {

    const [color, setColor] = useState(true);

    function toggle() {
        setColor(!color);
    }

    return (
        <button style={!color ? style : style2} onClick={() => toggle()}>{title}</button>
    )
    }

export default ToggleButton;