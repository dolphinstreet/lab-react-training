import React from "react";
import './Random.css'


const Random = ({ min, max }) => {
    const randomNumber = Math.floor((Math.random() * (max - min)) + min)

    return (

        <div className="Random">
            <p>Random value between {min} and {max} : {randomNumber}</p>
        </div>
    )
}
export default Random;


