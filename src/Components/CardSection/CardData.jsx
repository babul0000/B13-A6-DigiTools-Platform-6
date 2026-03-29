import React, { use } from 'react';
import CardList from './CardList';

const CardData = ({itemsCard}) => {
    const item = use(itemsCard)
    console.log(item);
    
    return(
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto gap-3'>
            {
                item.map(card => <CardList key={card.id} card={card}/>)
            }
        </div>
    );
};

export default CardData;