import React, { useEffect, useState } from 'react';
import CardData from './cardData';

const CardSection = ({ setNumber, number }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/ApiData.json")
            .then(res => res.json())
            .then(fetchedData => setData(fetchedData))
            .catch(err => console.error("Error loading data:", err));
    }, []);

    return (
        <div>
            <CardData itemsCard={data} setNumber={setNumber} number={number} />
        </div>
    );
};
export default CardSection;