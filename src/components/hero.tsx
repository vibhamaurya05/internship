import React from "react";
import Image from "next/image";
export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <Image
          src="/Frame5.png"
          height={900}
          width={900}
          alt="Gradient Background"
          className="w-full h-full object-cover"
        />
      </div>

      <nav className="relative flex justify-between items-center  h-[15vh] px-[50px]">
        <div className="h-[50px] w-[200] ">
          <Image
            src="/logo.png"
            alt="logo"
            width={200}
            height={180}
            className="object-cover"
          ></Image>
        </div>
        <div className="flex justify-between items-center gap-[10rem] ">
          <div className=" flex justify-center items-center  h-[8vh] w-[30vw] ">
            <ul className="flex gap-[60px] text-white font-medium">
              <li>Home</li>
              <li>Shop</li>
              <li>About Us</li>
              <li>Help</li>
            </ul>
          </div>
          <div className=" flex justify-center items-center h-[8vh] w-[7vw] ">
            <Image
              src="/Group-109.png"
              alt="logo"
              width={50}
              height={50}
              className="object-cover"
            ></Image>
          </div>
        </div>
      </nav>

      {/*********content**********/}
      <div className="absolute z-10 flex justify-around p-4 items-center h-[95vh] w-full ">
        {/*left div*/}
        <div className="flex flex-col justify-between  z-10 h-[50vh] w-[45vw] pl-2">
          <h1 className="text-white text-5xl">
            Welcome to
            <br />
            <span className="text-[3.3rem] font-semibold">
              Pop Rock Crystal Shop!
            </span>
          </h1>
          <div className="flex justify-center h-[15vh] w-[30vw] ">
            <p className="text-md">
              Here you will fid unique phne accessories, crystals, jewelry and
              more. Free shipping inside the U.S. and our phone grips come with
              a limited warranty. Enjoy!
            </p>
          </div>
          <div className="flex justify-between h-[7vh] w-[18vw]">
            <button className="border border-white bg-white text-[#317189] text-sm font-semibold px-6 rounded-xl">
              SHOP NOW
            </button>
            <button className="text-[#317189]">about us</button>
          </div>
        </div>

        {/*right div*/}
        <div className=" z-10 object-cover">
          <Image
            src="/Rectangle-228.png"
            height={620}
            width={620}
            alt="rect"
            className="bottom-[8]  "
          ></Image>

          {/* New Lot Badge */}
          <div className="absolute px-11 top-[18vh]">
            <Image
              src="/Group-104.png"
              alt="New lot"
              width={90}
              height={40}
              className="rounded"
            />
          </div>

          <div className=" absolute flex justify-center right-[10rem] top-[13vh]">
            <Image
              src="/Без имени-11.png"
              alt="Crystal Agate"
              width={350}
              height={350}
            />
          </div>

          <div className=" absolute right-[10rem] bottom-[8rem]">
            <h1 className="text-lg font-medium ">
              CRYSTAL AGATE PHONE GRIP- <span className="text-[#0a294dce] font-semibold">18.99$</span>{" "}
            </h1>
          </div>
        </div>
      </div>

      {/********************************/}
      <div className="absolute z-10  bottom-[-5rem] right-[15rem] ">
        <Image src="/Group113.png" width={230} height={18} alt="dot" />
      </div>

      {/********************************/}
      <div className="absolute z-10 bottom-[-8rem] right-[38rem] ">
        <Image src="/Group103.png" width={130} height={25} alt="dot" />
      </div>

      {/* Wave Divider */}
      {/* <div className="absolute bottom-0 left-0 w-full  top-[10rem]">
        <img src="/Vector-1.png" alt="Wave Divider" className="w-full" />
      </div> */}
      <div className=" absolute bottom-0 left-0 w-full top-[11rem]">
        <Image
          src="/Vector-1.png"
          alt="Wave Divider"
          layout="responsive"
          width={1000}
          height={500}
        />
      </div>
    </div>
  );
}





