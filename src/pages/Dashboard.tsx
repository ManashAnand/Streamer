import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MetricsCard } from "@/components/custom/DashboardDriven/metrics-card"
import { StatsChart } from "@/components/custom/DashboardDriven/stats-chart"
import { VaultTable } from "@/components/custom/DashboardDriven/vault-table"
import { BarChart3, ChevronDown, Globe, GrapeIcon, Home, LayoutDashboard, LifeBuoy, Settings, User, UserIcon, Wallet, WorkflowIcon } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { BsGraphDownArrow } from "react-icons/bs"
import { PieChartGraph } from "@/components/custom/DashboardDriven/pie-chart"
import { BarChartGraph } from "@/components/custom/DashboardDriven/bar-chart"

const Dashboard = () => {
    const metricsData = [
        {
            title: "Total Users",
            value: "5006",
            change: { value: "1,340", percentage: "2.1%", isPositive: false },
            bgColor: "#ACDDDE",
            chart: <BarChart3 />,
        },
        {
            title: "Active Users",
            value: "200",
            change: { value: "11", percentage: "+1.2%", isPositive: true },
            bgColor: "#CAF1DE",
            chart: <Globe />,
        },
        {
            title: "Total Streams",
            value: "230",
            change: { value: "140", percentage: "+1.2%", isPositive: true },
            bgColor: "#E1F8DC",

            chart: <WorkflowIcon />,
        },
        {
            title: "Revenue",
            value: "$80,892",
            change: { value: "$1,340", percentage: "+1.2%", isPositive: true },
            bgColor: "#E1F8DC",
            chart: <BsGraphDownArrow />,
        },
        {
            title: "Top Artist",
            value: "Kumar Sanu",
            change: { value: "", percentage: "", isPositive: false },
            bgColor: "#E1F8DC",
            chart: <UserIcon />,
        },
    ];

    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    console.log(hoveredIndex)
    return (
        <>
            <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className="min-h-screen bg-white/5 text-green-300 rounded-md  m-2 ">
                <div className="grid lg:grid-cols-[280px_1fr]">
                    <aside className="border-r border-green-500  backdrop-blur bg-transparent rounded-md">
                        <div className="flex h-16 items-center gap-2 border-b px-6">
                            <User className="h-6 w-6 border rounded-full border-green-500" />
                            <span className="font-bold">User</span>
                        </div>
                        <div className="px-4 py-4">
                            <Input placeholder="Search" className="bg-background/50 text-black" />
                        </div>
                        <nav className="space-y-2 px-2">
                            <Button variant="ghost" className="w-full justify-start gap-2">
                                <LayoutDashboard className="h-4 w-4" />
                                Dashboard
                            </Button>
                            <Button variant="ghost" className="w-full justify-start gap-2">
                                <BarChart3 className="h-4 w-4" />
                                Statistics & Income
                            </Button>
                            <Button variant="ghost" className="w-full justify-start gap-2">
                                <Globe className="h-4 w-4" />
                                Market
                            </Button>
                            <Button variant="ghost" className="w-full justify-start gap-2">
                                <Home className="h-4 w-4" />
                                Funding
                            </Button>
                            <Button variant="ghost" className="w-full justify-start gap-2">
                                <Wallet className="h-4 w-4" />
                                Yield Vaults
                                <ChevronDown className="ml-auto h-4 w-4" />
                            </Button>
                            <Button variant="ghost" className="w-full justify-start gap-2">
                                <LifeBuoy className="h-4 w-4" />
                                Support
                            </Button>
                            <Button variant="ghost" className="w-full justify-start gap-2">
                                <Settings className="h-4 w-4" />
                                Settings
                            </Button>
                        </nav>
                    </aside>
                    <main className="p-6">
                        <div className="mb-6 flex items-center justify-between">
                            <div className="space-y-1">
                                <h1 className="text-2xl font-bold">Analytics</h1>
                                <div className="text-sm text-muted-foreground">Jan 1, 2025 - Feb 1, {new Date().getUTCFullYear()}</div>
                            </div>

                        </div>
                        <div className="grid gap-4 md:grid-cols-3 center sm:justify-center ">
                            {
                                metricsData?.map((metric, idx) => {
                                    return (
                                        <div key={idx}

                                            className="relative group  block p-2 h-full w-full "
                                            onMouseEnter={() => setHoveredIndex(idx)}
                                            onMouseLeave={() => setHoveredIndex(null)}
                                        >
                                            <AnimatePresence>
                                                {
                                                    hoveredIndex == idx && (
                                                        <motion.span
                                                            className="absolute inset-0 h-full w-full bg-green-400/[0.8] block  rounded-3xl"
                                                            layoutId="hoverBackground"
                                                            initial={{ opacity: 0 }}
                                                            animate={{
                                                                opacity: 1,
                                                                transition: { duration: 0.15 },
                                                            }}
                                                            exit={{
                                                                opacity: 0,
                                                                transition: { duration: 0.15, delay: 0.2 },
                                                            }}
                                                        />
                                                    )

                                                }
                                            </AnimatePresence>
                                            <MetricsCard {...metric} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <Card className="mt-6 p-6 bg-green-200/20 border-none text-white/80 hidden sm:block">
                            <div className="mb-4 flex items-center justify-between flex-col sm:flex-row">
                                <h2 className="text-lg font-semibold">General Statistics</h2>
                                <div className="flex gap-2 flex-col sm:flex-row">
                                    <Button size="sm" variant="ghost">
                                        Today
                                    </Button>
                                    <Button size="sm" variant="ghost">
                                        Last week
                                    </Button>
                                    <Button size="sm" variant="ghost">
                                        Last month
                                    </Button>
                                    <Button size="sm" variant="ghost">
                                        Last 6 month
                                    </Button>
                                    <Button size="sm" variant="ghost">
                                        Year
                                    </Button>
                                </div>
                            </div>
                            <div className="">
                                <Tabs defaultValue="Growth" className="w-full">
                                    <TabsList>
                                        <TabsTrigger value="Growth">Growth</TabsTrigger>
                                        <TabsTrigger value="Revenue">Revenue</TabsTrigger>
                                        <TabsTrigger value="five">Top 5 songs</TabsTrigger>
                                    </TabsList>
                                    <TabsContent value="Growth">
                                        <StatsChart />
                                    </TabsContent>
                                    <TabsContent value="Revenue">
                                        <PieChartGraph />
                                    </TabsContent>
                                    <TabsContent value="five">
                                        <BarChartGraph />
                                    </TabsContent>
                                </Tabs>
                            </div>
                        </Card>
                        <div className="mt-6 hidden sm:block">
                            <VaultTable />
                        </div>
                    </main>
                </div>
            </motion.div>
        </>
    )
}

export default Dashboard
