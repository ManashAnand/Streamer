
import { motion } from "motion/react"
import { Bell, Download, Library, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"


export default function Navbar() {

  const variants = {
    visible: { y:0,transition:{type: "tween",  duration: 1} },
    hidden: { y: -100 },
  }

  return (
    <motion.div variants={variants} initial="hidden" animate="visible" className="my-4 z-50 flex h-16  items-center justify-between border-green-400 gap-4  bg-transparent px-4 text-green-600">
      <div className="flex items-center gap-4">
        <Link to="/" className="text-white hover:text-green-800/80">
          <span className="text-green-600 text-2xl font-bold">Streamify</span>
        </Link>
      </div>
      <div className="flex flex-1 items-center justify-center max-w-xl">
        <div className="relative flex w-full items-center">
          <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="What do you want to play?"
            className="w-full bg-zinc-800 pl-9 placeholder:text-muted-foreground text-white focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <Link to="/collection" className="hidden text-sm font-medium text-white hover:text-green-800/80 sm:block">
          <Library className="h-6 w-6" />
          <span className="sr-only">Your Library</span>
        </Link>
        <Button
          variant="default"
          className="hidden rounded-full bg-green-600 text-white px-4 text-sm font-bold  hover:scale-95 hover:bg-green-600 sm:block"
        >
          Explore Premium
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="hidden items-center gap-2 text-sm font-medium text-white hover:text-green-800/80 sm:flex"
        >
          <Download className="h-4 w-4" />
          Install App
        </Button>
        <Button variant="ghost" size="icon" className="text-white hover:text-green-800/80">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </Button>
        <Button variant="ghost" size="icon" className="relative h-8 w-8 rounded-full bg-zinc-800">
          <span className="absolute inset-0 flex items-center justify-center text-sm font-medium text-green-700">M</span>
          <span className="sr-only">Profile</span>
        </Button>
      </div>
    </motion.div>
  )
}

