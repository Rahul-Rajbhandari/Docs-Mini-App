import React, { useState } from 'react'
import Card from './Card'

function Foreground() {
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
      fileSize: ".9mb",
      close: true,
      tag: {isOpen: false, tagTitle:"Download Now", tagColor:"green"}
    }
  ]
  return (
    <>
        <div className='fixed top-0 left-0 z-[3] w-full h-full '>
        {data.map((item,index)=>(
          <Card/>
        ))}
        </div>
    </>
  )
}

export default Foreground