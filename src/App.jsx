import { useState } from "react";
import "./App.css";

import Hero from "./components/Navbar/Hero/Hero";

import Ratting from "./components/Ratting/Ratting";
import CardSection from "./components/CardSection/CardSection";
import Navbar from "./components/navbar/Navbar";
import SelectedCard from "./components/CardSection/selectedCard/SelectedCard";
import Primium from "./components/Primium/Primium";

function App() {
  const [number, setNumber] = useState(0);
  const [active, setActive] = useState("Products");
  const [carts, setcarts] = useState([]);
  console.log(active);
  // console.log(carts);

  const [data, setData] = useState([]);

  return (
    <>
      <Navbar number={number} />
      <Hero />
      <Ratting />

      <Primium setActive={setActive} number={number} />

      {active === "Products" ? (
        <CardSection
          setNumber={setNumber}
          number={number}
          active={active}
          data={data}
          setData={setData}
          carts={carts}
          setcarts={setcarts}
        />
      ) : null}

      {active === "cart" ? <SelectedCard carts={carts} /> : null}
    </>
  );
}

export default App;
