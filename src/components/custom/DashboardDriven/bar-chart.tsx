"use client"

import { Bar, BarChart, CartesianGrid, Legend,  ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"


const data = [
    {
      "name": "Kesariya",
      "liked by": 4000,
      "heard by": 2400
    },
    {
      "name": "Raataan Lambiyan",
      "liked by": 3000,
      "heard by": 1398
    },
    {
      "name": "Param Sundari",
      "liked by": 2000,
      "heard by": 9800
    },
    {
      "name": "Teri Mitti",
      "liked by": 2780,
      "heard by": 3908
    },
    {
      "name": "Ranjha",
      "liked by": 1890,
      "heard by": 4800
    }
  ];
export function BarChartGraph() {
    return (
        <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>

                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />


                    <Tooltip />
                    <Legend />
                    <Bar dataKey="liked by" fill="#8884d8" />
                    <Bar dataKey="heard by" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

