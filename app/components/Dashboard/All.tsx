'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import WelcomeHeader from './WelcomeHeader'
import WidgetFlyOut from './WidgetFlyOut'
import Dashboard from './Dashboard'

const defaultWidgets = ['programs', 'groupcalls', 'applications', 'recent', 'mentors']

const All = () => {

  const [flyoutOpen, setFlyoutOpen] = useState(false)
  const [selectedWidgets, setSelectedWidgets] = useState<string[]>([]) 
  const [pendingWidgets, setPendingWidgets] = useState<string[]>(defaultWidgets)


  const togglePendingWidget = (id: string) => {
    setPendingWidgets(prev =>
      prev.includes(id) ? prev.filter(w => w !== id) : [...prev, id]
    )
  }

  const saveChanges = () => {
    setSelectedWidgets(pendingWidgets)
    setFlyoutOpen(false)
  }

  const resetToDefault = () => {
    setPendingWidgets(defaultWidgets)
  }
  return (
<div> 
{flyoutOpen && (
        <div
          className="fixed inset-0 bg-opacity-5 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setFlyoutOpen(false)}
        />
      )}

        <div className='flex absolute right-9 ml-100 mt-20 space-x-4 items-center'>
        <div className='hover:bg-purple-200 p-2'>
        <Image 
          src="/fluent.png"
          alt="fluent"
          width= {15}
          height={10}          
        />
        </div>

       <div className='hover:bg-purple-200 p-2'>
       <Image 
          src="/Vector.png"
          alt="alternate"
          width= {15}
          height={10}
          onClick ={()=> setFlyoutOpen(true)}
        />
       </div>
        <p className='text-sm font-semibold'>Manage Widget</p>
    </div>
  {flyoutOpen && (<WidgetFlyOut 
  open={flyoutOpen}
  onClose={() => setFlyoutOpen(false)}
  widgets={pendingWidgets}
  toggleWidget={togglePendingWidget}
  onSave={saveChanges}
  onReset={resetToDefault} />)}
  <WelcomeHeader/>
  <Dashboard widgets={selectedWidgets} />

</div>



    
  )
}

export default All