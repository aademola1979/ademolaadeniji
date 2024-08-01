'use client'
import { useState } from "react"
import {
  Sheet, SheetTrigger, SheetContent,
  SheetClose,

} from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"
import Link from "next/link"
import Logo from "../Logo"


const MobileNav = () => {
  const navItmes = [
    {
      text: "Home",
      link: "/",
      icon: ""
    },

    {
      text: "Contact",
      link: "/contact",
      icon: ""
    },

    {
      text: "My Works",
      link: "/my-works",
      icon: ""
    },

    {
      text: "Git Repo",
      link: "/git-repos",
      icon: ""
    }
  ]
  const [open, setOpen] = useState(false)

  const toggleMobileNav = () => (setOpen(prev => !prev))

  const closeMobileNav = () => setOpen(false)
  const openMobileNave = () => setOpen(true)


  console.log(open)

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild className="" onClick={toggleMobileNav}><MenuIcon className="section-titles block lg:hidden cursor-pointer" /></SheetTrigger>
        <SheetContent side="left" onClick={toggleMobileNav} className="">
          <SheetClose asChild>
            <Logo className="h-4 w-4 py-2 mb-4" />
          </SheetClose>

          <div className="pt-8 grid gap-2">
            {
              navItmes.map((item, i) => (
                <SheetClose key={i} asChild>
                  <Link href={item.link} className="text-black/60 hover:text-black ">{item.text}</Link>
                </SheetClose>
              ))
            }
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNav