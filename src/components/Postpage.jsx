import React from 'react';
import Avater from './Avatar';
 // Import Tailwind CSS file
 
const Postpage = ({data}) => {
  const url = "src/assets/coding/GStech-1.jpeg" ;
  return (
    <>
    <div className='flex ml-2'>
   
    <div className="max-w-[23rem] bg-white border border-gray-200 rounded-lg shadow relative mr-2 mb-3">
    {/* <Link to={`blog/${data.slug}`}> */}
      <img
        className="rounded-lg"
        src={url}
        alt=""
      />
    {/* </Link> */}
    <div className="px-5 pt-1">
      <a href="/news" className="text-red-500 hover:text-red-400 cursor-pointer">News</a>
    </div>
    <div className="p-5 pt-">
      
        <h5 className="mb-2 text-xl sm:text-base font-bold tracking-tight text-gray-900 trac">
        Exploring Astro’s Content Collections API with a demo project
        </h5>
      {/* </Link> */}
      <p className="mb-3 font-normal text-gray-700 line-clamp-3">
        Here are the biggest enterprise technology acquisitions of 2021 so
        far and also go acquisitions of 2021.
      </p>
      <div className="flex">
        <Avater image="src/assets/coding/7309681.jpg" />
        <div className="text-sm">
          <h5 className="font-normal mb-1">John deo</h5>
          <div className="flex font-light">
            <h5 className="mr-2 font-light">May 17, 2023</h5>
            <h5 className="font-light">8 min read</h5>
          </div>
          
        </div>
      </div>
    </div>
  </div>
    
   
  </div>
   
  </>
  );
};

export default Postpage;
