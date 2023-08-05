import React from 'react';
import ArtImg from './image/art1.jpg';
const WWO = () => {

    return (
        <div className='ml-7 mt-24 sm:mt-44 md:ml-36  sm:ml-20'>
            <h1 className='font-semibold text-4xl sm:mt-44'>What We Offer</h1>
            <p className='text-xl mt-8 w-11/12 md:w-5/6 lg:w-2/3 sm:w-11/12'>At WebD, we are a dynamic and innovative web
                development startup, committed to delivering cutting-edge
                digital solutions to businesses of all sizes. Our team of
                skilled designers and developers specializes in crafting
                captivating websites that not only impress visually but also
                engage and convert visitors into loyal customers. </p><br /><br/>
            <div>
                <img src={ArtImg} alt="Image" className="w-56 lg:w-56 md:w-40 rounded-xl img-hover-scrolling" /><br/>
                <h1 className='text-2xl font-semibold'>Workflows<br/> That Work</h1><br/>
                <p className='w-72 lg:w-56 md:w-40'>
                    I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
            </div>
            <div className='mt-8 lg:-mt-[550px] md:ml-60 md:-mt-[515px] lg:ml-72 xl:ml-96 sm:-mt-[550px] sm:ml-80'>
                <img src={ArtImg} alt="Image" className="w-56 lg:w-56 md:w-40 sm:mt-6 md:-mt-10 rounded-xl img-hover-scrolling" /><br/>
                <h1 className='text-2xl font-semibold'>Workflows<br/> That Work</h1><br/>
                <p className='w-72 lg:w-56 md:w-40'>
                    I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
            </div>
            <div className='mt-8 lg:-mt-[552px] md:ml-[480px] md:-mt-[515px] xl:ml-[768px] lg:ml-[580px]  sm:ml-0'>
                <img src={ArtImg} alt="Image" className="w-56 lg:w-56 md:w-40  rounded-xl img-hover-scrolling" /><br/>
                <h1 className='text-2xl font-semibold'>Workflows<br/> That Work</h1><br/>
                <p className='w-72 lg:w-56 md:w-40'>
                    I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
            </div>
        </div>
    );
};

export default WWO;
