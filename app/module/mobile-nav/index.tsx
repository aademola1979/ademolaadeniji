'use client'
import { useState } from "react"
import {
  Sheet, SheetTrigger, SheetContent,
  SheetClose,

} from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"
import Link from "next/link"
import Logo from "../Logo"
import { FadeInComponent } from "../AnimatedContainer"
import { once } from "events"
import SocialMedia from "../landing-page/SocialMedia"



const MobileNav = () => {
  type Item={
    text:string,
    link: string,
    icon?: React.ReactNode
  }
  const navItmes = [
    {
      text: "Home",
      link: "/",
      icon: ""
    },
    {
      text: "About Me",
      link: "/about",
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
    },

  ]
  const [open, setOpen] = useState(false)

  const toggleMobileNav = () => (setOpen(prev => !prev))

  //const closeMobileNav = () => setOpen(false)
  const openMobileNave = () => setOpen(true)


  return (
    <div>
      <Sheet>
        <SheetTrigger asChild className="" onClick={toggleMobileNav}><MenuIcon className="section-titles block sm:hidden cursor-pointer" /></SheetTrigger>
        <SheetContent side="left" onClick={toggleMobileNav} className="min-h-[100vh] overflow-x-auto pt-[4rem] flex flex-col justify-between gap-0">
          <div className=" grid gap-4">
            {
              navItmes.map((item:Item, i) => (
                <SheetClose key={i} asChild>


                  <Link href={item.link} className="text-black/60 hover:text-black text-lg font-medium">
                    <FadeInComponent
                      className="text-lg font-medium"
                      type='spring'
                      delay={i * 0.1}
                      direction='right'
                      duration={1}
                      viewport={{ once: true }}

                    >
                      {item.text}

                    </FadeInComponent>
                  </Link>

                </SheetClose>
              ))
            }
          </div>
          <div className="self-end flex justify-center w-full">
            <SocialMedia />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNav