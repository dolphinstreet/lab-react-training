import './App.css';
import React from "react";
import IdCard from "./components/IdCard/IdCard.js"
import Greeting from "./components/Greeting/Greeting.js"
import Random from "./components/Random/Random.js"
import BoxColor from "./components/BoxColor/BoxColor.js"



function App() {
  return (
    <>
      <h2>IdCard</h2>
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <h2>Greetings</h2>
      <Greeting lang="de" children="Ludwig"></Greeting>
      <Greeting lang="fr" children="Francois"></Greeting>
      <h2>Random numbers</h2>

      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <h2>Backgrounds colors</h2>

      <BoxColor r={255} g={0} b={0} bg />
      <BoxColor r={128} g={255} b={0} bg />
    </>
  );
}

export default App;
