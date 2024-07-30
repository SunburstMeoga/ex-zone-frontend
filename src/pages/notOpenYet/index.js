import React from 'react'
import { useRouter } from 'next/router';

const NotOpenYet = () => {
  const router = useRouter()
  return (
    <div className='text-primary-yellow bg-primary-purple w-full h-40-0 flex flex-col justify-center items-center'>
      <div className='text-2-0 mb-2-0'>Not open yet</div>
      <div className='rounded-lg w-22-0 h-3-0 flex justify-center items-center  bg-primary-red text-1-3' onClick={() => { router.back() }}>
        GO Back
      </div>
    </div>
  )
}

export default NotOpenYet
