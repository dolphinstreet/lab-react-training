import React from "react";
import Rating from "../Rating/Rating";
import "./DriverCard.css"

const DriverCard = ({name,rating, img, car}) => {
   
    return (
        <div className="driver-card">
            <div className="image" style={{backgroundImage:"url("+ img +")"}}>
            </div>
            <div className="name">
                <h4>{name}</h4>
                <Rating>{rating}</Rating>
                <div className="car">
                    <h6>{car.model}</h6>
                    <h6>{car.licensePlate}</h6>
                </div>
            </div>
        </div>

    )
}
export default DriverCard;



