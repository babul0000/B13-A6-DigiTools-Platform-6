import React from 'react';

const Ratting = () => {
    return (
        <div className='bg-primary text-white'>

            <div className='grid grid-cols-3 w-10/12 mx-auto py-10 mb-10 text-center'>
                <div className='border-r-2 border-amber-50 pl-6'>
                <h2 className='text-white text-3xl font-bold'>50K+</h2>
                <h4 className='text-white opacity-70'>Active Users</h4>
            </div>
            <div className='border-r-2 border-amber-50 pl-6'>
                <h2  className='text-white text-3xl font-bold'>200+</h2>
                <h4 className='text-white opacity-70'>Premium Tools</h4>
            </div>
            <div>
                <h2  className='text-white text-3xl font-bold'>4.9</h2>
                <h4 className='text-white opacity-70'>Rating</h4>
            </div>
            </div>
            
        </div>
    );
};

export default Ratting;