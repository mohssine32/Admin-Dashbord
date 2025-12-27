'use client'
import React from 'react'
import StatCard from '../components/StatCard'
import { DollarSign, ShoppingBag, SquareActivity, User } from 'lucide-react'
import SalesoverViewcharts from '../components/SalesoverViewcharts'
import RadarChartb from '../components/RadarChartb'
import ComposedChartsd from '../components/ComposedChartsd'
import WeeklyChart from '../components/PieChart'
import Statcardgreen from '../components/statcardgreen'

function OverviewPage() {
  return (
    <>
      <div className=' w-full h-[550px]  flex flex-col justify-around lg:flex-row lg:h-[200px] lg:items-center '>
       <Statcardgreen />
        <StatCard name="revenue" icon={User} value="$182,000" bgColor='bg-white' />
        <StatCard name="Expenses" icon={DollarSign} value="$120,000" bgColor='bg-white' />
        <StatCard name="Stock" icon={User} value="182,000 " bgColor='bg-white'/>

      </div>
      <div className='w-full h-[1200px] flex flex-col justify-around   sm:h-[1400px] lg:h-[700px]'>


        <div className='w-full  h-[550px]  flex flex-col justify-between     sm:h-[650px]  lg:flex-row lg:h-[320px]'>

          <div className=' w-[95%] h-[250px]  bg-white rounded-2xl  mx-auto lg:w-[47%] sm:h-[310px]'>
            <SalesoverViewcharts />
          </div>

          <div className=' w-[95%] h-[250px]  bg-white rounded-2xl  mx-auto lg:w-[47%] sm:h-[310px]'>
            <WeeklyChart />
          </div>
        </div >


        <div className='w-full  h-[550px]  flex flex-col justify-between sm:h-[650px]   lg:flex-row lg:h-[320px]'> 

          <div className=' w-[95%] h-[250px]  bg-white rounded-2xl  mx-auto lg:w-[47%] sm:h-[310px]'>
            <RadarChartb />
          </div>

          <div className='w-[95%] h-[250px]  bg-white rounded-2xl  mx-auto lg:w-[47%] sm:h-[310px]'>
            <ComposedChartsd />
          </div>
        </div>
      </div>

    </>
  )
}

export default OverviewPage