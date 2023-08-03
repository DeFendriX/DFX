import React from 'react';
import myImage from './image/design-mobile-2.png';
import secLogo from './image/security-lock.png';
import supLogo from './image/support-icon.png';
import collabLogo from './image/colab-icon.png';

const About = () => {

    return (
        <div class='flex flex-col md:flex-row items-center md:items-start'>
            <img src={myImage} class='md:order-2 lg:order-2 mt-4 md:mt-0 md:w-2/5 md:mx-auto' />
            <div className='w-80 sm:w-full'>
                <h1 class='font-medium text-3xl sm:text-5xl md:text-left md:ml-4 lg:ml-40 mt-4 md:mt-0 md:order-1 lg:order-1'>
                    Let us help<br />
                    You make your mark on the web.
                </h1><br />
                <p className='md:text-left sm:text-2xl text-xl md:ml-4 lg:ml-40 mt-4 md:mt-0 md:order-1 lg:order-1'>
                    WebD provides an effective and powerful way to manage your online presence through your Website
                </p>
                <div className='mt-0 sm:mt-14'>
                    <div>
                        <img src={secLogo} className='w-7 sm:w-8 md:ml-4 lg:ml-40 mt-4 md:mt-0 md:order-1 lg:order-1' />
                        <p className='ml-10 sm:ml-52 -mt-7 sm:-mt-10 w-36 sm:w-32'>Speed & Security</p>
                    </div>
                    <div className='mt-7 sm:-mt-10 sm:ml-40'>
                        <img src={supLogo} className='w-7 sm:w-8 md:ml-4 lg:ml-40 mt-4 md:mt-0 md:order-1 lg:order-1' />
                        <p className='ml-10 sm:ml-52 -mt-7 sm:-mt-10 w-36 sm:w-20'>24/7 Support</p>
                    </div>
                    <div className='mt-7 sm:-mt-10 sm:ml-80'>
                        <img src={collabLogo} className='w-7 sm:w-8 md:ml-4 lg:ml-40 mt-4 md:mt-0 md:order-1 lg:order-1' />
                        <p className='ml-10 sm:ml-52 -mt-7 sm:-mt-10 sm:w-20'>Better Collaboration</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
