import React, { useState } from 'react';
import AvailablePlayers from '../CardSection/selectedCard/AvailablePlayers';
import SelectedCard from '../CardSection/selectedCard/SelectedCard';

const Primium = ({setActive, number}) => {
    
    const handleModel = () => {
        setSelected("Products")
        setActive("Products")
    }

    const handleCart =() => {
setSelected("cart")
setActive("cart")
    }

    const [selected, setSelected] = useState("Products")
    return (
        <div className='w-11/12 mx-auto mb-10'>
            <div className='text-center space-y-3' >
                <h1 className='text-3xl font-bold'>Premium Digital Tools</h1>
            <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>

            <div className=' '>
                <div className=''>
                    <button
                    onClick={handleModel}
                    className={`btn ${selected === "Products" ? "btn-primary"  :  ""} rounded-r-none rounded-l-full `}>Products</button>

                <button
                onClick={handleCart} 
                className={`btn ${selected === "cart" ? "btn-primary"  :  "" } rounded-l-none rounded-r-full px-3 w-25`}>Cart <span>({number})</span></button></div>
            </div>
            </div>

{selected === "Products" ?
<AvailablePlayers />  : <SelectedCard/>}

        </div>
        
    );
};

export default Primium;