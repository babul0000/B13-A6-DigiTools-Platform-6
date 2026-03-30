import React from 'react';
import CardData from './cardData';


const cardItems = async() => {
const res = await fetch("/ApiData.json")
return res.json();
}
const itemsCard = cardItems();

const CardSection = ({setNumber, number}) => {
    
    
    return (
        <div >
            <CardData itemsCard={itemsCard} setNumber={setNumber} number={number}/>

            {/* {
                itemsCard.map(items => <CardData items={items}/>)
            } */}
        </div>
    );
};

export default CardSection;