import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Sidebar = () => {
  return (
    <div className="p-5 w-60 text-white text-md bg-purple-950">

        <div className=' flex flex-row space-x-3 m-2 mb-10'>
            <Link href="/"><Image 
                src="/Frame1171276268.png" 
                alt="logo"
                width={100}
                height={100}
                
        />
        </Link>
        <Image 
            src="/grid-4.png"
            alt="toggle"
            width={20}
            height={20}
            className='ml-5'
        />
        </div>
        <ul className="flex flex-col p-3 m-3 space-y-6" >
            <li className='flex hover:bg-white hover:text-purple-800 space-x-6 flex-row'><Image 
              src="/Icon.png"
              alt="dashboard"
              width={15}
              height={15} /><Link href="/components/Dashboard">Dashboard</Link></li>
            <li className="flex space-x-6 hover:bg-white hover:text-purple-800">
            <Image 
              src="/book.png"
              alt="dashboard"
              width={15}
              height={15} /><Link href="/components/Programs">Programs</Link></li>
            <li className="flex space-x-6 hover:bg-white hover:text-purple-800"><Image 
              src="/bubble.png"
              alt="dashboard"
              width={20}
              height={20} /><Link href="/components/Activities">Activities</Link></li>
            <li className="flex space-x-6 hover:bg-white hover:text-purple-800"><Image 
              src="/clipboard-text.png"
              alt="dashboard"
              width={20}
              height={20} /><Link href="/components/Forums">Forums</Link></li>
            <li className="flex space-x-6 hover:bg-white hover:text-purple-800"><Image 
              src="/wallet.png"
              alt="dashboard"
              width={20}
              height={20} /><Link href="/components/Finances">Finances</Link></li>
            <li className="flex space-x-6 hover:bg-white hover:text-purple-800"><Image 
              src="/award.png"
              alt="dashboard"
              width={20}
              height={20} /><Link href="/components/Rewards">Rewards</Link></li>
            <li className="flex space-x-6 hover:bg-white hover:text-purple-800"><Image 
              src="/diagram.png"
              alt="dashboard"
              width={20}
              height={20} /><Link href="/components/Analytics">Analytics</Link></li>
            <li className="flex space-x-6 hover:bg-white hover:text-purple-800"><Image 
              src="/setting-2.png"
              alt="dashboard"
              width={20}
              height={20} /><Link href="/components/Settings">Settings</Link></li>
            <li className="flex space-x-6 hover:bg-white hover:text-purple-800"><Image 
              src="/logout.png"
              alt="dashboard"
              width={20}
              height={20} /><Link href="/components/Login ">LogOut</Link></li>
        </ul>

        <div className="bg-purple-800 p-5 space-y-3 rounded-2xl">
        <Image 
              src="/user-tag.png"
              alt="dashboard"
              width={20}
              height={20} />
            <p className='text-sm'>Got some questions, enquiries or need help?</p>
            <a className='text-xs'href="#">Visit Mently Help Desk Here</a>
        </div>

        <div className="flex mt-3 space-x-2 items-center cursor-pointer text-sm"><p>Switch to Classic Mode</p><input type="checkbox" className="sr-only peer" />
        <div className="w-7 h-3 bg-gray-300 peer-checked:bg-blue-600 rounded-full peer peer-focus:ring-1 peer-focus:ring-blue-500 transition-all relative">
    <div className="w-3 h-2 bg-white rounded-full shadow absolute left-0.5 top-0.5 peer-checked:translate-x-full transition-transform" />
  </div>
        </div>


    </div>
  )
}

export default Sidebar