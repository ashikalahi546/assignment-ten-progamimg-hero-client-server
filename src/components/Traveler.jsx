import React from 'react';

const Traveler = ({traveler}) => {
    console.log(traveler)
    const {   name,email,country,sport,seasonality,location,average,time,total,image,short} = traveler
    return (
        <div className='mt-20'>
            <h1 className='text-2xl'>{name}</h1>
            <h1 className='text-2xl'>{email}</h1>
            <h1 className='text-2xl'>{country}</h1>
            <h1 className='text-2xl'>{sport}</h1>
            <h1 className='text-2xl'>{seasonality}</h1>
            <h1 className='text-2xl'>{location}</h1>
            <h1 className='text-2xl'>{time}</h1>
            <h1 className='text-2xl'>{average}</h1>
            <h1 className='text-2xl'>{total}</h1>
            <h1 className='text-2xl'>{short}</h1>
        </div>
    );
};

export default Traveler;