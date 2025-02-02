import React from "react"
import { ArrowRight, Globe, TrendingUp } from "lucide-react"

import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"

interface WrapButtonProps {
    className?: string
    children: React.ReactNode
    href?: string
}

export default function CTABtn({
    className,
    children,
    href,
}: WrapButtonProps) {
    return (
        <div className="flex items-center justify-center mt-2">
            {href ? (
                <Link to={href}>
                    <div
                        className={cn(
                            "group cursor-pointer border group border-[#3B3A3A] bg-[#151515] gap-2  h-[64px] flex items-center p-[11px] rounded-full",
                            className
                        )}
                    >
                        <div className="  h-[43px] rounded-full flex items-center justify-center text-green-400/">
                            <p className="font-medium tracking-tight mr-3 ml-2 flex items-center gap-2 justify-center ">
                                {children}
                            </p>
                        </div>
                        <div className="text-[#16a34a] group-hover:ml-2  ease-in-out transition-all size-[26px] flex items-center justify-center rounded-full border-2 border-[#3b3a3a] rotate-90 group-hover:rotate-0 ">
                            <TrendingUp />
                        </div>
                    </div>
                </Link>
            ) : (
                <div
                    className={cn(
                        "group cursor-pointer border group border-[#3B3A3A] bg-[#151515] gap-2  h-[64px] flex items-center p-[11px] rounded-full",
                        className
                    )}
                >
                    <div className="border border-[#3B3A3A] bg-[#fe7500]  h-[43px] rounded-full flex items-center justify-center text-white">
                        <Globe className="mx-2 animate-spin " />
                        <p className="font-medium tracking-tight mr-3">
                            {children ? children : "Get Started"}
                        </p>
                    </div>
                    <div className="text-[#3b3a3a] group-hover:ml-2  ease-in-out transition-all size-[26px] flex items-center justify-center rounded-full border-2 border-[#3b3a3a]  ">
                        <ArrowRight
                            size={18}
                            className="group-hover:rotate-45 ease-in-out transition-all "
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

