import React from 'react'
import Image from 'next/image'

const footer = () => {
  return (
    <div className='h-[55vh] bg-[#0A294D] mt-0'>
      <div className="grid gap-10 lg:grid-cols-3 xl:grid-cols-4 pt-8">
            <div className="flex flex-col items-center justify-center text-center lg:block lg:text-start px-8">
                <Image 
                src='/logo.png'
                height={60}
                width={200}
                alt="logo"/>
            </div>
            <div className="text-center lg:block lg:text-start">
                <b className="text-[#75CCEB] text-[17px]">Blog</b>
                <ul>
                    <li className="text-[#d6d5d5] mt-[10px] text-[16px] cursor-pointer">AI video generator platform.</li>
                    <li className="text-[#d6d5d5] mt-[10px] text-[16px] cursor-pointer">Video editor.</li>
                    <li className="text-[#d6d5d5] mt-[10px] text-[16px] cursor-pointer">Build captivating websites.</li>
                    <li className="text-[#d6d5d5] mt-[10px] text-[16px] cursor-pointer">User-friendly website.</li>
                    
                    
                </ul>
            </div>

            <div className=" text-center lg:block lg:text-start">
                <b className="text-[#75CCEB] text-[17px]">Support</b>
                <ul>
                    <li className="text-[#d6d5d5] mt-[10px] text-[16px] cursor-pointer">Contact Pop Rock Crystal.</li>
                    <li className="text-[#d6d5d5] mt-[10px] text-[16px] cursor-pointer">Service Centre.</li>
                   
                   
                </ul>
            </div>

            <div className="text-center lg:block lg:text-start">
                <b className="text-[#75CCEB] text-[17px]">Company</b>
                <ul>
                    <li className="text-[#d6d5d5] mt-[10px] text-[16px] cursor-pointer">About Pop Rock Crystal.</li>
                    <li className="text-[#d6d5d5] mt-[10px] text-[16px] cursor-pointer">News and Info.</li>
                    <li className="text-[#d6d5d5] mt-[10px] text-[16px] cursor-pointer">Job Opportunities.</li>
                </ul>
                
            </div>
        </div>

        <div className="flex justify-around px-[1.1rem] py-[1.6rem] border-t-[0.26px] border-[#bbbcbd] mt-[24px]">
            {/* <p className=" font-[600]"><i className='bx bx-copyright'></i>2024 RODE All Rights Reserved.</p>
            <p>Privacy Policy | Terms & Conditions</p> */}
            <p className='text-[#75CCEB]'>Copyright © 2024 clipwise. All Rights Reserved by Vibha Maurya.</p>
            
        </div>
    </div>
  )
}

export default footer