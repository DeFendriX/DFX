import React from 'react';
import myImage from './image/design-mobile-2.png';
import secLogo from './image/security-lock.png';
import supLogo from './image/support-icon.png';
import collabLogo from './image/colab-icon.png';

const About = () => {

    return (
        <div class='flex  flex-col lg:-ml-40 md:flex-row items-center md:items-start'>
            <img src={myImage} class='w-3/4 md:order-2 lg:order-2 mt-4 md:mt-0 md:w-2/5 md:mx-auto' />
            <div className='w-80 ml-4 lg:mt-1  sm:ml-36 sm:w-full'>
                <h1 class='font-medium text-3xl sm:text-5xl md:text-left md:ml-4 lg:ml-40 mt-4 md:mt-0 md:order-1 lg:order-1'>
                    Let us help<br />
                    You make your mark on the web.
                </h1><br />
                <p className='md:text-left sm:text-2xl text-xl md:ml-4 lg:ml-40 mt-4 md:mt-0 md:order-1 lg:order-1'>
                    WebD provides an effective and powerful way to manage your online presence through your Website
                </p><br />
                <div className='mt-0 sm:mt-14'>
                    <div>
                        <img src={secLogo} className='w-7 sm:w-8 md:ml-4 lg:ml-40 mt-4 md:mt-0 md:order-1 lg:order-1' />
                        <p className='ml-14 lg:ml-52  -mt-7 sm:-mt-10 w-36 sm:w-32'>Speed & Security</p>
                    </div>
                    <div className='mt-7 sm:-mt-10 sm:ml-40'>
                        <img src={supLogo} className='w-7 sm:w-8 md:ml-4 sm:ml-14 sm:-mt-7 lg:ml-40 mt-4 md:mt-0 md:order-1 lg:order-1' />
                        <p className='ml-14 lg:ml-52 sm:ml-28 md:ml-16 -mt-7 sm:-mt-10 w-36 sm:w-20'>24/7 Support</p>
                    </div>
                    <div className='mt-7 sm:-mt-10 sm:ml-80'>
                        <img src={collabLogo} className='w-7 sm:w-8 md:ml-4 sm:ml-24 sm:-mt-7 lg:ml-40 mt-4 md:mt-0 md:order-1 lg:order-1' />
                        <p className='ml-14 lg:ml-52 sm:ml-36 md:ml-16 -mt-7 sm:-mt-10 sm:w-20'>Better Collaboration</p>
                    </div>
                </div><br/>
                <p className='lg:ml-40 md:ml-4 lg:w-2/3 sm:w-11/12 text-lg'>Stay in the know! Join our newsletter and get the 
                    latest trends, special promotions, and industry 
                    insights delivered straight to your inbox. 
                    Don't miss out - Subscribe today! 💌</p><br/>
                <iframe src="https://embeds.beehiiv.com/593c0428-13d3-4374-a3f3-8f377fc8d1cd?slim=true" data-test-id="beehiiv-embed"
                    height="52" frameborder="0" scrolling="no"
                    class="md:ml-4 lg:ml-40 m-0 rounded-none bg-transparent"></iframe>

            </div><br />
        </div>
    );
};

export default About;
