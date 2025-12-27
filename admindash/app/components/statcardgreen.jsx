import React from 'react'
import { MoveUpRight } from 'lucide-react';


function Statcardgreen() {
    return (
        <div className="w-[95%] h-[100px] flex flex-col justify-around rounded-2xl mx-auto   lg:w-[190px] lg:h-[150px] bg-white border border-black" >
            <div className=' flex justify-between w-[85%] mx-auto '><p className='text-gray-700 text-sm'>income :</p><span className='text-green-400 font-bold'><MoveUpRight /></span></div>
            <div><p className='text-black   w-[85%] mx-auto font-bold text-3xl'>$9.560.00</p></div>
            <div className='flex justify-between   w-[85%] mx-auto'>
                <div className='text-black  text-xs]'>84 Transactions</div>
                 <div className='text-green-400 font-bold'>+10%</div>
            
            </div>
        </div>
    )
}

export default Statcardgreen