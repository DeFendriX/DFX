import React from 'react';
import FootImg from './image/Footer-image-2.png';
const Footer = () => {

    return (
       <>
       <div className='h-80'>
        <img src={FootImg} className='ml-96 w-3/5'/>
            <div className='h-80 w-full bg-amber-400 mt-0'></div>
            <h1 className='text-3xl sm:text-6xl w-2/3 ml-4 -mt-56 sm:ml-36 sm:-mt-60'>Get Ready to Maximize Your Productivity With Our Presence</h1>
        </div>
       </> 
    );
};

export default Footer;
