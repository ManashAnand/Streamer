"use client"

import { Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const data01 = [
    { name: "Subscriptions", value: 60000 },
    { name: "Ads", value: 30000 },
    { name: "Affiliate", value: 10000 },
    { name: "Sponsorships", value: 20000 },
];

const data02 = [
    { name: "USA", value: 40000 },
    { name: "UK", value: 30000 },
    { name: "Canada", value: 20000 },
    { name: "Australia", value: 10000 },
    { name: "Other", value: 20000 },
];
export function PieChartGraph() {
    return (
        <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart data={data01}>
                    <Tooltip
                        content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                                return (
                                    <div className="rounded-lg border bg-background p-2 shadow-sm">
                                        <div className="grid grid-cols-2 gap-2">
                                            <div className="flex flex-col">
                                                <span className="text-[0.70rem] uppercase text-muted-foreground">Value</span>
                                                <span className="font-bold text-muted-foreground">{payload[0].value}</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[0.70rem] uppercase text-muted-foreground">Date</span>
                                                <span className="font-bold">{payload[0].payload.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            return null
                        }}
                    />
                    <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                    <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

