import React, { useRef, useState } from 'react'
import Card from './Card'

function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      desc: "Hi this is from data",
      fileSize: ".9mb",
      close: true,
      tag: {isOpen: true, tagTitle:"Download Now", tagColor:"zinc"}
    },
    {
      desc: "Hi this is from data",
      fileSize: ".9mb",
      close: true,
      tag: {isOpen: true, tagTitle:"Downloading", tagColor:"green"}
    },
    {
      desc: "Hi this is from data",
      fileSize: ".9mb",
      close: true,
      tag: {isOpen: true, tagTitle:"Upload", tagColor:"sky"}
    },
    {
      desc: "Hi this is from data",
      fileSize: ".9mb",
      close: true,
      tag: {isOpen: true, tagTitle:"Download Now", tagColor:"green"}
    }
  ]
  return (
    <>
        <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-10'>
        {data.map((item,index)=>(
          <Card data={item} reference= {ref}/>
        ))}
        </div>
    </>
  )
}

export default Foreground