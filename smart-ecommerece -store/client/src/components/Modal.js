import { useEffect } from 'react'

const Modal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className="bg-white dark:bg-gray-900 rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-6 border-b dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              ×
            </button>
          </div>
        </div>
        <div className="p-6">
          {children}
        </div>
        <div className="p-6 border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 rounded-b-2xl">
          <div className="flex gap-3 justify-end">
            <button 
              className="px-6 py-2 border border-gray-300 rounded-xl hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800 transition-colors"
              onClick={onClose}
            >
              Cancel
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal

