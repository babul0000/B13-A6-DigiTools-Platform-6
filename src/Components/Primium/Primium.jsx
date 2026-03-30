import React, { useState } from 'react';
import AvailablePlayers from '../CardSection/selectedCard/AvailablePlayers';
import SelectedCard from '../CardSection/selectedCard/SelectedCard';

const Primium = () => {
    

    const [selected, setSelected] = useState("Products")
    const [selectedPlayers, setSelectedPlayers] = useState([])
    return (
        <div className='w-11/12 mx-auto mb-10'>
            <div className='text-center space-y-3' >
                <h1 className='text-3xl font-bold'>Premium Digital Tools</h1>
            <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>

            <div className=' '>
                <div className=''>
                    <button
                    onClick={() => setSelected("Products")}
                    className={`btn ${selected === "Products" ? "btn-primary"  :  ""} rounded-r-none rounded-l-full `}>Products</button>

                <button
                onClick={() => setSelected("cart")} 
                className={`btn ${selected === "cart" ? "btn-primary"  :  "" } rounded-l-none rounded-r-full px-3 w-25`}>Cart <span>(2)</span></button></div>
            </div>
            </div>

{selected === "Products" ?
<AvailablePlayers selectedPlayers={selectedPlayers} />  :
<SelectedCard/>}

        </div>
        
    );
};

export default Primium;