import React from 'react'
import Image from 'next/image'
const MentorWidget = () => {
  return (
    <div className="bg-white rounded-2xl p-2 h-100 w-75 row-span-2">
        <div className='flex space-x-4 items-center'>
                          <Image 
                          src="/famicons_outline.png"
                          alt="burger"
                          width={16}
                          height={7}
                          />
                          <div className=' flex space-x-28 items-center'>
                              <p className='text-sm text-zinc-400'>Mentors</p>
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

export default MentorWidget