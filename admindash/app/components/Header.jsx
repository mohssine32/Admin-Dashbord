'use client';
import { div, header, image } from 'framer-motion/client';
import React from 'react';
import Image from 'next/image';
import { Bell, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className='bg-white  w-[100%] '>
      <div  className="bg-white w-[100%]  max-w-[1400px] flex flex-col  mx-auto z-[20] h-20   ">
      <div className="flex justify-between h-full ">

        <div className=" flex items-center ml-2.5">
          <button className="mr-2 lg:hidden" onClick={() => window.dispatchEvent(new Event('toggleMobileSidebar'))}>
            <Menu className="text-black" size={20} />
          </button>
          <h1 className='text-black font-bold'></h1>
          </div>



        <div className='flex justify-around w-36   items-center'>
          <div> <Image src="/france.png" alt="country flag" width={25} height={18} className="" /></div>

          <div> <Bell className="text-black" /></div>
          <div className="w-[25px] h-[25px] rounded-full overflow-hidden border border-black">
            <Image src="/admin.png" alt="admin" width={25} height={25} className="object-cover w-full h-full " />
          </div>
        </div>



      </div>
</div>
    </header>
  )
}

export default Header