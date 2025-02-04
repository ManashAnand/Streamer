import { Card } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"
import type React from "react" 

 

interface MetricsCardProps {
  title: string
  value: string
  bgColor?: string
  change: {
    value: string
    percentage: string
    isPositive: boolean
  }
  chart?: React.ReactNode
}

export function MetricsCard({ title, value, change, chart,bgColor="bg-transparent" }: MetricsCardProps) {
  return (
    <Card className={`p-4  backdrop-blur text-white  bg-transparent `}>
      <div className="flex items-center justify-between mb-4">
        <h3 className=" text-white font-bold text-2xl">{title}</h3>
        {chart ? <ArrowUpRight className="h-4 w-4 text-muted-foreground" /> : "manash"}
      </div>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-2xl font-bold">{value}</p>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-sm">+{change.value}</span>
            <span className={`text-sm ${change.isPositive ? "text-green-700" : "text-red-500"}`}>
              {change.percentage}
            </span>
          </div>
        </div>
        {chart}
      </div>
    </Card>
  )
}

