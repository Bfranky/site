import React from 'react';
import Navbar from './navbar';
import Sidebar from './Sidebar';

const Header = () => {
  const URL ="src/assets/coding/gstech.5.jpeg"
  return (
    <>
    <Navbar/>
    {/* <Sidebar/> */}
    
    <div className="relative w-50 lg:h-[450px] sm:h-[250px] md:h-[350px] mb-3">
      <img
        src={URL}
        alt=""
        className="brightness-50 w-full h-full"
        
      />
      <Sidebar/>
      <div className="absolute inset-0 flex items-center justify-center flex-col text-white">
        <h1 className="text-2xl font-extrabold mb-2 md:text-4xl lg:text-5xl">The Blog</h1>
      </div>
      
    </div>
    </>

  );

};

export default Header;
