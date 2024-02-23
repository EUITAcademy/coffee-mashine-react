import { useState } from 'react'
import { MdCoffeeMaker } from "react-icons/md";

import './App.css'

function App() {
  const [beans, setBeans] = useState(10);
  const [water, setWater] = useState(100);

  const addBeans = () => {
    setBeans((beans) => beans + 10);
  };

  const addWater = () => {
    setWater((water) => water + 100);
  };

  const makeCoffee = () => {

    if (beans < 10) {
      alert("Not enough beans...");
    } else if (water < 100) {
      alert("Not enough water...");
    } else {
      setBeans((beans) => beans - 10);
      setWater((water) => water - 100);
      alert("Making coffee...");
    }   
  };

  return (
    <div>
      <MdCoffeeMaker size={70} color='#B19470'/>
      <p>Coffee Machine</p>
      <div className="coffee-stats">
        <p>Beans: {beans}</p>
        <p>Water: {water} L</p>
      </div>
      <button onClick={addBeans}>Add beans</button>
      <button onClick={addWater}>Add water</button>
      <button onClick={makeCoffee}>Make coffee</button>
    </div>
  );
}

export default App

