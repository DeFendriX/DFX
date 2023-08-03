import React from 'react';
import myImage from './image/design-mobile.png';

const About = () => {

    return (
        <div class='flex flex-col md:flex-row items-center md:items-start'>
            <img src={myImage} class='md:order-2 lg:order-2 mt-4 md:mt-0 md:mx-auto' />
            <div className='ml-2'>
                <h1 class='font-semibold text-5xl md:text-left md:ml-4 lg:ml-40 mt-4 md:mt-0 md:order-1 lg:order-1'>
                    Let us help<br />
                    You make your mark on the web.
                </h1><br/>
                <p className='md:text-left text-2xl md:ml-4 lg:ml-40 mt-4 md:mt-0 md:order-1 lg:order-1'>
                WebD provides an effective and powerful way to manage your online presence through your Website
                </p>
            </div>
        </div>
    );
};

export default About;
