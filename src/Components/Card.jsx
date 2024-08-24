import React from 'react'
import { PiFilesBold } from "react-icons/pi";
import { FaDownload } from "react-icons/fa6";

function Card() {
  return (
    <>
      <div className="relative h-72 w-60 bg-zinc-900/90 rounded-[40px] text-white px-8 py-10 overflow-hidden">

        <PiFilesBold />

        <p className='text-sm mt-5 font-semibold leading-tight'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>

        <div className="footer absolute bottom-0 left-0 w-full">

          <div className='flex items-center justify-between mb-3 py-3 px-8'>
            <h5>.4mb</h5>
            <span className='h-7 w-7 bg-zinc-600 flex items-center justify-center rounded-full'>
              <FaDownload size='.8em' color='#fff' />
            </span>
          </div>

          <div className='tag bg-green-600 w-full py-4 flex items-center justify-center'>
            <h3 className='text-sm font-semibold'>Download Now</h3>
          </div>
        </div>

      </div>
    </>
  )
}

export default Card