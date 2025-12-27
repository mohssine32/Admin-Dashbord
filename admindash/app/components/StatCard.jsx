import React from 'react';

const StatCard = ({ name, icon: Icon, value, bgColor = 'bg-white' }) => {
    return (
        <div className={`${bgColor} bg-[#d1ff00] w-[95%] h-[100px] rounded-2xl mx-auto border border-black lg:w-[190px] lg:h-[150px]`}>
            <div className='flex w-35 h-6 ml-3 mt-3'>
                <span className="text-black">
                    <Icon size={20} />
                </span>
                <p className="text-black pl-1">{name}</p>
            </div>

            <div className='w-35 h-9 ml-3'>
                <p className="font-bold text-black text-3xl">{value}</p>
            </div>
        </div>
    );
};

export default StatCard;