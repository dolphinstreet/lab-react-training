import React from "react";
import './BoxColor.css'


const BoxColor = ({ r, g, b, bg }) => {
    const style = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`
    }
    const hex = "#" + (r).toString(16) + (g).toString(16) + (b).toString(16)
    return (

        <div className="BoxColor" style={style}>
            <p>rgb ({r},{g},{b})</p>
            <p>{hex}</p>
        </div>
    )
}
export default BoxColor;

