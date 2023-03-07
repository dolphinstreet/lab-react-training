import './App.css';
import React from "react";
import IdCard from "./components/IdCard/IdCard.js"
import Greeting from "./components/Greeting/Greeting.js"
import Random from "./components/Random/Random.js"
import BoxColor from "./components/BoxColor/BoxColor.js"
import CreditCard from "./components/CreditCard/CreditCard.jsx"



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

      <h2>Credit cards</h2>
      <section className='credit-cards'>
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />

        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </section>

    </>
  );
}

export default App;
