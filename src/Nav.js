// import React from 'react';
// import myImage from './image/dlogo.jpeg';
// import './Nav.css';

// const Nav = () => {
//   return (
//     <nav className='flex items-center'>
//       <img src={myImage} alt="My Image" className='rounded-full w-20 h-20 m-10' />
//       <h1><font className="text-3xl font-bold">WebD</font><br />Let us help you make your mark on the web.</h1>
//       <ul className='list-none flex p-0 ml-auto m-4'>
//         <li><a href="/" className='mx-4'>Home</a></li>
//         <li><a href="/about" className='mx-4'>Products</a></li>
//         <li><a href="/careers" className='mx-4'>Careers</a></li>
//         <li><a href="/contact" className='mx-4'>Contact</a></li>
//       </ul>
//       <div className='m-10'>
//         <button className='bg-yellow-400 w-20 h-10 border rounded-lg border-black'>Clients</button>
//       </div>
      
//     </nav>
//   );
// };

// export default Nav;


import React, { useState } from 'react';
import myImage from './image/dlogo.jpeg';
import './Nav.css';

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className='flex items-center'>
      <img src={myImage} alt="My Image" className='rounded-full w-20 h-20 m-10' />
      <h1><font className="text-3xl font-bold">WebD</font><br />Let us help you make your mark on the web.</h1>

      {/* Toggle button for small screens */}
      <button
        className='m-4 w-20 h-10 border rounded-lg border-black sm:hidden'
        onClick={toggleNav}
      >
        {isNavOpen ? '✕' : '☰'}
      </button>

      {/* List for small screens */}
      <ul className={`list-none ml-auto m-4 absolute right-0 mt-80 bg-white border border-gray-300 p-4 rounded-lg sm:hidden ${isNavOpen ? 'block' : 'hidden'}`}>
            <li>
                <a href="/" className='block py-2'>Home</a>
            </li>
            <li>
                <a href="/about" className='block py-2'>Products</a>
            </li>
            <li>
                <a href="/careers" className='block py-2'>Careers</a>
            </li>
            <li>
                <a href="/contact" className='block py-2'>Contact</a>
            </li>
            <li>
                <button className='bg-yellow-400 w-20 h-10 border rounded-lg border-black'>Clients</button>
            </li>
      </ul>

      {/* List for larger screens */}
      <ul className={`list-none flex p-0 ml-auto m-4 hidden sm:flex`}>
        <li>
          <a href="/" className='mx-4'>Home</a>
        </li>
        <li>
          <a href="/about" className='mx-4'>Products</a>
        </li>
        <li>
          <a href="/careers" className='mx-4'>Careers</a>
        </li>
        <li>
          <a href="/contact" className='mx-4'>Contact</a>
        </li>
        <li >
            <button className='bg-yellow-400 w-20 h-10 border rounded-lg border-black -mt-40'>Clients</button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
