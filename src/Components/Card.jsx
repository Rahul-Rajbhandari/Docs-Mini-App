import React from 'react'
import { PiFilesBold } from "react-icons/pi";
import { FaDownload } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data, reference}) {
  console.log(data.tag.tagColor)

  return (
    <>
      <motion.div drag dragConstraints= {reference} whileDrag={{scale:1.1}} dragElastic={0.1} 
  dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }} className="relative flex-shrink-0 h-72 w-60 bg-zinc-900/90 rounded-[40px] text-white px-8 py-10 overflow-hidden">

        <PiFilesBold />

        <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>

        <div className="footer absolute bottom-0 left-0 w-full">

          <div className='flex items-center justify-between mb-3 py-3 px-8'>
            <h5>{data.fileSize}</h5>
            <span className='h-7 w-7 bg-zinc-600 flex items-center justify-center rounded-full'>
              {data.close ? <IoClose size='.8em' color='#fff'/> : <FaDownload size='.8em' color='#fff' />}
            </span>
          </div>
          {
            data.tag.isOpen && (
              <div className={`tag ${data.tag.tagColor === "green" ? "bg-green-600" : "bg-blue-600"} w-full py-4 flex items-center justify-center`}>
              <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
            </div>
            ) //display if isOpen is true otherwise nothing.
          }

        </div>
      </motion.div>
    </>
  )
}

export default Card