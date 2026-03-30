import React, { use, useState } from 'react';
import CardList from './CardList';

const CardData = ({itemsCard, carts, setCarts, setNumber, number, active, data, setData }) => {

    // const [isSubscribe, setIsSubscribe] = useState(false)
    const item = use(itemsCard)
console.log();

    setNumber(item.length)
    
    data = item;
    
    return(
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto gap-3'>
            {
                item.map(card => <CardList key={card.id} card={card} setNumber={setNumber} number={number} active={active} data={data} setData={setData} carts={carts} setCarts={setCarts}/>)
            }
        </div>
    );
};

export default CardData;