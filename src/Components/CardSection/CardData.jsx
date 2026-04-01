import React from "react";
import CardList from "./CardList";

const CardData = ({ itemsCard, setNumber, number, carts, setcarts }) => {
  if (!Array.isArray(itemsCard) || itemsCard.length === 0) {
    return <p className="text-center mt-10">Loading products...</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-11/12 mx-auto">
      {itemsCard.map((card) => (
        <CardList
          key={card.id}
          card={card}
          setNumber={setNumber}
          number={number}
          carts={carts}
          setcarts={setcarts}
        />
      ))}
    </div>
  );
};

export default CardData;
