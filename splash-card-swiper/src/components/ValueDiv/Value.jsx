import React from 'react'
import simple from '../../assets/pic4.jpeg'
import valentines from '../../assets/valentines.jpeg'
import map from '../../assets/pic2.jpeg'


const Value = () => {
  return (
    <div className='mb-[4rem] mt-[6rem]'>
      <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block'>The value that holds us true and to account</h1>

      <div className='grid gap-[10rem] grid-cols-3 items-center'>
          <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
              <div className='flex items-center gap-3'>
                  <div className='imgDiv p-[4px] rounded-[.8rem] bg--inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
                    <img src={simple} alt="" className='w-[70%]'/>

                  </div>
                  <span className='font-semibold text-textColor text-[18px]'>
                    Simplicity
                  </span>
              </div>
              <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
                Land your self a job just at the click of a single button
              </p>
          </div>

          <div className='singleGrid rounded-[10px] hover:bg-[#f7edf5] p-[1.5rem]'>
              <div className='flex items-center gap-3'>
                  <div className='imgDiv p-[4px] rounded-[.8rem] bg--inherit-[#f7edf5] h-[40px] w-[40px] flex items-center justify-center'>
                    <img src={valentines} alt="" className='w-[70%]'/>

                  </div>
                  <span className='font-semibold text-textColor text-[18px]'>
                    Better
                  </span>
              </div>
              <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
                We believe in making things better for everyone, even if just by a little bit!
              </p>
          </div>
          <div className='singleGrid rounded-[10px] hover:bg-[#fcfae3] p-[1.5rem]'>
              <div className='flex items-center gap-3'>
                  <div className='imgDiv p-[4px] rounded-[.8rem] bg--inherit-[#f3f2ad] h-[40px] w-[40px] flex items-center justify-center'>
                    <img src={map} alt="" className='w-[70%]'/>

                  </div>
                  <span className='font-semibold text-textColor text-[18px]'>
                    Navigation
                  </span>
              </div>
              <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
                When you have the right direction, nothing can hinder you from achieving your purpose!
              </p>
          </div>
      </div>
    </div>
  )
}

export default Value
