
import React from 'react'
import Image from 'next/image'

const widgetList = [
    { id: 'programs', label: 'Programs' },
    { id: 'groupcalls', label: 'Group Calls' },
    { id: 'mentors', label: 'Mentors' },
    { id: 'recent', label: 'Recent Activities' },
    { id: 'applications', label: 'Applications' },
    { id: 'earnings', label: 'Earnings' },
    { id: 'forum', label: 'Forum' },
    { id: 'program', label: 'Program Analysis' },
  ]

  type Props = {
    open: boolean
    widgets: string[]
    toggleWidget: (id: string) => void
    onClose: () => void
    onSave: () => void
    onReset: () => void
  }

    

const WidgetControl = ({
  open,
  widgets,
  toggleWidget,
  onClose,
  onSave,
  onReset,
}: Props) => {   


  return (
    
    

    // FLy Out

    <aside
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
        open ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex justify-between items-center p-4">        
        <button onClick={onClose} className="text-xl ml-60 text-gray-600 hover:text-black">
          &times;
        </button>
      </div>

      <div className='m-10'>
      <h2 className='text-lg font-semibold mb-4 text-purple-800'>Manage Widget</h2>
      <p className='text-xs'>Personalize your dashboard by managing widgets add, remove, or reorder them to fit your workflow.</p>
      <div className="p-4 space-y-3">
        {widgetList.map(widget => (
          <label key={widget.id} className="flex space-x-5 items-center gap-2">
            <Image
            src="/famicons_outline.png"
            alt="burger"
            width={14}
            height={8}
            />
            <div className="flex w-50 space-x-15">
            <span className='text-xs'>{widget.label}</span>
            <input
              type="checkbox"
              checked={widgets.includes(widget.id)}
              onChange={() => toggleWidget(widget.id)}
              className="accent-blue-600 ml-auto"
            />
            </div>
          </label>
        ))}
      </div>

      <div className="p-2 flex space-x-1">       
      <button onClick={onSave}
          className="px-3 py-2 bg-purple-700 text-white text-sm rounded hover:bg-purple-900">
                      Save Changes
        </button>
        <button onClick={onReset} className="text-sm border-2 text-purple-800 rounded border-purple-700">
          Reset to Default
        </button>
        
      </div>
      </div>
    </aside>
  )
}

export default WidgetControl