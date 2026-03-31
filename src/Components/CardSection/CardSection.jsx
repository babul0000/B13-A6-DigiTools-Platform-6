import React, { useEffect, useState } from "react";
import CardData from "./CardData";

const CardSection = ({ setNumber, number, carts, setcarts }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/ApiData.json")
      .then((res) => res.json())
      .then((fetchedData) => setData(fetchedData))
      .catch((err) => console.error("Error loading data:", err));
  }, []);

  return (
    <div>
      <CardData itemsCard={data} setNumber={setNumber} number={number} carts={carts}
          setcarts={setcarts} />
    </div>
  );
};
export default CardSection;
