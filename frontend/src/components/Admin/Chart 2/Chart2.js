import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
function Chart2({data}) {
      
  return (
    <>
<div className="chart">
      <div className="title">{"Specialization Based Revenue"}</div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{top: 40, right: 30, left: 0, bottom: 0}}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </>
  )
}

export default Chart2