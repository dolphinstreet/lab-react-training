import React from "react";
import './Greeting.css'


const Greeting = ({ lang,children }) => {
    console.log({lang})
    const msg = {lang}.lang==="de" ? "Hallo" : {lang}.lang==="fr" ? "Bonjour" : {lang}.lang==="es" ? "Hola" : "Else"    
    return (

        <div className="Greeting">
            <p>{msg} {children}</p>
        </div>
    )
}
export default Greeting;