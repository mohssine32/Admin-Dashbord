'use client';
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 100,
    pv: 200,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 500,
    pv: 908,
    amt: 1210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 1800,
    amt: 1290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function SalesoverViewcharts() {
  return (

 <div className='w-full h-[90%]  '>
 
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" padding={{ left: 20, right: 20 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#6044ff" //#8884d8
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="black" />
    </LineChart>
      </ResponsiveContainer>
      </div>
 
  )
}

export default SalesoverViewcharts