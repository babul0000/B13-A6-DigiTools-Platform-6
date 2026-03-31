import React from 'react';
import CardList from './CardList';

const CardData = ({ itemsCard, setNumber, number }) => {
    if (!Array.isArray(itemsCard)) return <p className="text-center mt-10">Loading...</p>;

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-11/12 mx-auto'>
            {itemsCard.map(card => (
                <CardList key={card.id} card={card} setNumber={setNumber} number={number} />
            ))}
        </div>
    );
};
export default CardData;