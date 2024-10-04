// import React from 'react'

// const product = () => {
//   return (
//     <div className='h-full w-full mt-[15rem]'>
//         <div className='text-5xl text-[#2f6e85] font-semibold text-center p-6'>
//             <h1>All products</h1>
//         </div>
//         <div className=' w-[30%] flex justify-around  p-6'>
//             <div>
//                 <p className='text-[#9AB0C0]'>Filter: <span className='text-[#31546D] font-semibold'>All Product</span><span className='text-black'>&#x25BC;</span></p>
//             </div>
//             <div>
//                 <p className='text-[#9AB0C0]'>Sort: <span className='text-[#31546D] font-semibold'>Best Selling</span><span className='text-black'>&#x25BC;</span></p>
//             </div>
//         </div>
//         <div className='h-full w-full'>
//             <div className='h-full grid grid-cols-4  gap-5 px-4 m-4 py-6'>
//                 <div className='h-full w-full flex flex-col items-center gap-2 py-4 my-2 border border-gray-300 shadow-2xl rounded-3xl'>
//                     <img src='/Без имени-12.png' className='h-[200px]'></img>
//                     <p className='text-center font-medium '>CRYSTAL AGATE PHONE GRIP<br/><span className='text-[#317189] font-semibold '>18.99$</span></p>
//                     <button className='border border-[#75CCEB] bg-[#75CCEB] text-sm text-white rounded-2xl shadow-md px-6 py-3 font-semibold '>BUY NOW</button>
//                 </div>

//                 <div className='h-full w-full flex flex-col items-center gap-2  my-2 py-4 border border-gray-300 rounded-3xl'>
//                     <img src='/Без имени-12.png' className='h-[200px]'></img>
//                     <p className='text-center font-medium'>CRYSTAL AGATE PHONE GRIP<br/><span className='text-[#317189] font-semibold '>18.99$</span></p>
//                     <button className='border-[3px] border-[#75CCEB]  font-semibold text-[#75CCEB] rounded-2xl px-6 py-3 text-sm'>BUY NOW</button>
//                 </div>
//                 <div className='h-full w-full flex flex-col items-center gap-2 my-2  py-4 border border-gray-300 rounded-3xl'>
//                     <img src='/Без имени-12.png' className='h-[200px]'></img>
//                     <p className='text-center font-medium'>CRYSTAL AGATE PHONE GRIP<br/><span className='text-[#317189] font-semibold '>18.99$</span></p>
//                     <button className='border-[3px] border-[#75CCEB] font-semibold text-[#75CCEB] rounded-2xl px-6 py-3 text-sm '>BUY NOW</button>
//                 </div>
//                 <div className='h-full w-full flex flex-col items-center gap-2  my-2 py-4 border border-gray-300 rounded-3xl'>
//                     <img src='/Без имени-12.png' className='h-[200px]'></img>
//                     <p className='text-center font-medium'>CRYSTAL AGATE PHONE GRIP<br/><span className='text-[#317189] font-semibold '>18.99$</span></p>
//                     <button className='border-[3px] border-[#75CCEB] font-semibold text-[#75CCEB] rounded-2xl px-6 py-3 text-sm'>BUY NOW</button>
//                 </div>
//                 <div className='h-full w-full flex flex-col items-center gap-2 my-2  py-4 border border-gray-300 rounded-3xl'>
//                     <img src='/Без имени-12.png' className='h-[200px]'></img>
//                     <p className='text-center font-medium'>CRYSTAL AGATE PHONE GRIP<br/><span className='text-[#317189] font-semibold '>18.99$</span></p>
//                     <button className='border-[3px] border-[#75CCEB] font-semibold text-[#75CCEB] rounded-2xl px-6 py-3 text-sm '>BUY NOW</button>
//                 </div>
//                 <div className='h-full w-full flex flex-col items-center gap-2  my-2 py-4 border border-gray-300 rounded-3xl'>
//                     <img src='/Без имени-12.png' className='h-[200px]'></img>
//                     <p className='text-center font-medium'>CRYSTAL AGATE PHONE GRIP<br/><span className='text-[#317189] font-semibold '>18.99$</span></p>
//                     <button className='border-[3px] border-[#75CCEB] font-semibold text-[#75CCEB] rounded-2xl px-6 py-3 text-sm'>BUY NOW</button>
//                 </div>
//                 <div className='h-full w-full flex flex-col items-center gap-2  my-2 py-4 border border-gray-300 rounded-3xl'>
//                     <img src='/Без имени-12.png' className='h-[200px]'></img>
//                     <p className='text-center font-medium'>CRYSTAL AGATE PHONE GRIP<br/><span className='text-[#317189] font-semibold '>18.99$</span></p>
//                     <button className='border-[3px] border-[#75CCEB] font-semibold text-[#75CCEB] rounded-2xl px-6 py-3 text-sm'>BUY NOW</button>
//                 </div>
//                 <div className='h-full w-full flex flex-col items-center gap-2 my-2  py-4 border border-gray-300 rounded-3xl'>
//                     <img src='/Без имени-12.png' className='h-[200px]'></img>
//                     <p className='text-center font-medium'>CRYSTAL AGATE PHONE GRIP<br/><span className='text-[#317189] font-semibold '>18.99$</span></p>
//                     <button className='border-[3px] border-[#75CCEB] font-semibold text-[#75CCEB] rounded-2xl px-6 py-3 text-sm'>BUY NOW</button>
//                 </div>
//             </div>
//         </div>

//         <div className='flex justify-center mt-16'>
//             <button className=' px-12 py-3 border-[2px] border-blue-300 text-blue-300 rounded-3xl font-semibold '>View All</button>
//         </div>
//     </div>
//   )
// }

// export default product




import React from 'react';
import Image from 'next/image';

const Product = () => {
  return (
    <div className='h-full w-full mt-[15rem]'>
      <div className='text-5xl text-[#2f6e85] font-semibold text-center p-6'>
        <h1>All products</h1>
      </div>
      
      <div className='w-full flex justify-around p-6'>
        <div>
          <p className='text-[#9AB0C0]'>
            Filter: <span className='text-[#31546D] font-semibold'>All Product</span>
            <span className='text-black'>&#x25BC;</span>
          </p>
        </div>
        <div>
          <p className='text-[#9AB0C0]'>
            Sort: <span className='text-[#31546D] font-semibold'>Best Selling</span>
            <span className='text-black'>&#x25BC;</span>
          </p>
        </div>
      </div>

      <div className='h-full w-full'>
        <div className='h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-4 m-4 py-6'>
          {/* Single Product */}
          {Array(8).fill(0).map((_, index) => (
            <div key={index} className='h-full w-full flex flex-col items-center gap-2 py-4 my-2 border border-gray-300 shadow-2xl rounded-3xl'>
              <div className='relative h-[200px] w-full'>
                <Image
                  src='/Без имени-12.png'
                  alt='CRYSTAL AGATE PHONE GRIP'
                  layout='fill'
                  objectFit='contain'
                />
              </div>
              <p className='text-center font-medium'>
                CRYSTAL AGATE PHONE GRIP
                <br />
                <span className='text-[#317189] font-semibold '>18.99$</span>
              </p>
              <button className='border border-[#75CCEB] bg-[#75CCEB] text-sm text-white rounded-2xl shadow-md px-6 py-3 font-semibold'>
                BUY NOW
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-center mt-16'>
        <button className='px-12 py-3 border-[2px] border-blue-300 text-blue-300 rounded-3xl font-semibold'>
          View All
        </button>
      </div>
    </div>
  );
};

export default Product;
