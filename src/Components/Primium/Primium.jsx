import React from 'react';

const Primium = () => {
    return (
        <div className='w-11/12 mx-auto mb-10'>
            <div className='text-center space-y-3' >
                <h1 className='text-3xl font-bold'>Premium Digital Tools</h1>
            <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>

            <div className=' '>
                <div className=''>
                    <button className='btn btn-primary rounded-r-none rounded-l-full'>Products</button>

                <button className='btn rounded-l-none rounded-r-full px-3 w-25'>Cart (2)</button></div>
            </div>
            </div>
        </div>
    );
};

export default Primium;