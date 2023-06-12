import React from 'react';
import Navbar from './Navbar';
// import Sidebar from './Sidebar';

const Header = () => {
  const URL ="src/assets/coding/adem-ay-Tk9m_HP4rgQ-unsplash.jpg"
  return (
    <>

    <Navbar/>
   
    <div className="relative w-full lg:h-[500px] sm:h-[250px] md:h-[350px]">
      <img
        src={URL}
        alt=""
        className="brightness-50 w-full h-full"
        
      />
      
      <div className="absolute inset-0 flex items-center justify-center flex-col text-white">
        <h1 className="text-2xl font-extrabold mb-2 md:text-4xl lg:text-5xl">The Blog</h1>
      </div>
      
    </div>
    </>

  );

};

export default Header;
