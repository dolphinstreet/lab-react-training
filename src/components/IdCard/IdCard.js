import React from "react";
import './IdCard.css'


const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
    return (

        <div className="IdCard">
            <picture>
                <img src={picture} alt={firstName} />
            </picture>
            <div className="info">
                <p><b>Last name :</b> {lastName}</p>
                <p><b>First name :</b> {firstName}</p>
                <p><b>Gender :</b> {gender}</p>
                <p><b>Heigth :</b> {height}</p>
                <p><b>Birth :</b> {birth.toDateString()}</p>

            </div>
        </div>
    )
}
export default IdCard;