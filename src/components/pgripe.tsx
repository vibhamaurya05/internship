import React from 'react'
import Image from 'next/image'
const pgripe = () => {
  return (
    <div className='relative min-h-screen '>
        <div className="absolute inset-0 mt-10">
        <Image
          src="/Frame6.png"
          height={900}
          width={900}
          alt="Gradient Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative bottom-0 left-0 top-1 w-full ">
        <img src="/Vector-2.png" alt="Wave Divider" className="object-cover" />       
        
      </div>

      <div className='flex  justify-center items-center   w-full '>
          <div className='absolute flex flex-col justify-evenly text-right  top-[15rem] h-[65vh] w-[35vw] left-[13rem]  '>
            <h2 className='text-[#317189] text-3xl'>BEST PRICE</h2>
            <h1 className='text-[#317189] text-5xl font-semibold'>Agate Phone Grip</h1>
            <p className='text-[brown] text-5xl font-semibold'>19.50$</p>
            <p className='text-right'>These Pop Rock Crystal grip tops can be swapped with other tops depending on your mood, outfit, nails, phone case, holiday, etc.! Just gently squeeze the sides to remove and swap out with another color or design!
            </p>
            <button className='h-[8vh] w-[22vh] border border-blue-300 bg-blue-300 text-white px-3 py-2 rounded-2xl ml-[21rem]'>BUY NOW</button>
          </div>

          <div className=' absolute z-10 object-cover right-0 h-[90vh] w-[50vw] top-[14rem]'>
            <Image
              src='/Ellipse9.png'
              alt='ellipse'
              height={800}
              width={800}
              className='pt-16'
            />
          </div>

          <div className='absolute z-10 top-[11rem] right-4'>
            <Image
              src="/Ellipse11.png"
              alt='ellipse11'
              height={620}
              width={620}
            />
          </div>

          <div className='absolute z-10 top-[15.5rem] right-[5.5rem]'>
            <Image
              src="/Ellipse10.png"
              alt='ellipse10'
              height={470}
              width={470}
            />
          </div>

          <div className='absolute z-10 top-[23rem] right-[13rem]'>
            <Image
              src="/Без имени-12.png"
              alt='Без имени-12'
              height={250}
              width={250}
            />
          </div>
          
        </div>
    </div>
  )
}

export default pgripe