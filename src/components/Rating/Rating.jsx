import React from "react";


const Rating = ({children}) => {
    const fullStars = Math.round(children);
    const emptyStars = 5-fullStars;
    const arrayOfStars =[];
    for (let i=0; i <fullStars; i++){
        arrayOfStars.push("★")
    }
    for (let i=0; i <emptyStars; i++){
        arrayOfStars.push("✩")
    }

    return (
        <div className="stars" style={{fontSize:"2rem"}} >
        {arrayOfStars.map(star => star)}
      </div>

    )
}
export default Rating;
