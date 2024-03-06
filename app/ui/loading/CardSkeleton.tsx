import React from 'react'

const CardSkeleton = () => {
  return (
    <div className="">
  
    <div className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      {/* Skeleton loader for image */}
      <div className="animate-pulse bg-gray-300 h-64 w-full"></div>

      <div className="p-4">
        {/* Skeleton loader for title */}
        <div className="animate-pulse bg-gray-300 h-4 w-3/4 mb-2"></div>
        {/* Skeleton loader for description */}
        <div className="animate-pulse bg-gray-300 h-3 w-2/4"></div>
      </div>
    </div>
  </div>
  )
}

export default CardSkeleton