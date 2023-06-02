import React from 'react'

export default function Avater({image}) {
  return (
    <div className='mr-2 '>
      <img src={image} alt='' className="w-10 h-10 rounded-full"/>
    </div>
  )
}
