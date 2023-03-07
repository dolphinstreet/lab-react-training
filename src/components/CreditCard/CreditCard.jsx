import React from 'react';
import './CreditCard.css';

import "./CreditCard.css"


const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {

  let hideNumber ="";
  for (let i=0;i<16;i++){
    i<12 ? hideNumber+="*" : hideNumber+=number[i]
  }

let logo = "";
type==="Visa" ? logo = "visa.png" : logo = "master-card.svg"

return  <div className="credit-card" style={{backgroundColor:bgColor, color}}>
            <div className='logo'>
                <img src={logo} alt={type} />
            </div>
            <div className='number'>
              <h2>{hideNumber}</h2>
            </div>
            <div className='info'>
              <div className='expire-bank'>
                <h4>Expires {expirationMonth}/{expirationYear}</h4>
                <h4>{bank}</h4>
              </div>
              <h4>{owner}</h4>
            </div>
          </div>
};
export default CreditCard;
