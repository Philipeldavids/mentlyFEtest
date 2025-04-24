import React from 'react'
import Image from 'next/image'

const GroupCallWidget = () => {
  return (

    <div className="bg-white p-3 rounded-2xl h-60 col-span-2">
              <div className='flex space-x-4 items-center'>
                    <Image 
                    src="/famicons_outline.png"
                    alt="burger"
                    width={16}
                    height={7}
                    />
                    <div className=' flex space-x-105 items-center'>
                        <p className='text-sm text-zinc-400'>Group Calls</p>
                        <span className='text-xs cursor-pointer text-purple-800'>See all</span>
                    </div>
                    <Image 
                    src="/tdesign_more.png"
                    alt="menu"
                    width={14}
                    height={8}
                    
                    />
              </div>
              <div className='flex'>
                <div className='w-50 h-60 rounded p-2'>
                <Image 
                src="/Rectangle.png"
                alt="picture"
                width={180}
                height={20}
                />

                <p className='text-xs text-green-300 w-10 bg-green-200 rounded-2xl p-1'><span className='text-xs'>*</span>Ongoing</p>

                </div>
                <div>

                </div>
              </div>
    </div>
  )
}

export default GroupCallWidget