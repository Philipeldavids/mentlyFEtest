import React from 'react'
import Image from 'next/image'

const RecentActivityWidget = () => {
  return (
    <div className="bg-white p-2 rounded-2xl h-55  ">
        <div className='flex space-x-4 items-center'>
                          <Image 
                          src="/famicons_outline.png"
                          alt="burger"
                          width={16}
                          height={7}
                          />
                          <div className=' flex space-x-28 items-center'>
                              <p className='text-sm text-zinc-400'>Recent Activities</p>
                              <span className='text-xs cursor-pointer text-purple-800'>See all</span>
                          </div>
                          <Image 
                          src="/tdesign_more.png"
                          alt="menu"
                          width={14}
                          height={8}
                          
                          />
                      </div>
  </div>
  )
}

export default RecentActivityWidget