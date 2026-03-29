import React from 'react';
import CardData from './cardData';


const cardItems = async() => {
const res = await fetch("/ApiData.json")
return res.json();
}
const itemsCard = cardItems();

const CardSection = () => {
    
    
    return (
        <div >
            <CardData itemsCard={itemsCard}/>

            {/* {
                itemsCard.map(items => <CardData items={items}/>)
            } */}
        </div>
    );
};

export default CardSection;