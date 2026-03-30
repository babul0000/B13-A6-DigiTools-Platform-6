import React from 'react';
import CardData from './cardData';


const cardItems = async() => {
const res = await fetch("/ApiData.json")
return res.json();
}
const itemsCard = cardItems();

const CardSection = ({setNumber, carts, setCarts, number, active, data, setData }) => {
    
    
    return (
        <div >
            <CardData itemsCard={itemsCard} setNumber={setNumber} number={number} active={active} data={data} setData={setData} carts={carts} setCarts={setCarts}/>

            {/* {
                itemsCard.map(items => <CardData items={items}/>)
            } */}
        </div>
    );
};

export default CardSection;