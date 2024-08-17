'use client'
import { useState } from "react";
import {
  Sheet, SheetTrigger, SheetContent,
  SheetClose,

} from "@/components/ui/sheet";
import Link from "next/link";
import { FadeInComponent } from "../AnimatedContainer";
import { usePathname } from "next/navigation";
import SocialMedia from "../landing-page/SocialMedia";
import { CiMenuFries } from "react-icons/ci";



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
      text: "Projects",
      link: "/projects",
      icon: ""
    },

  ]
  const [open, setOpen] = useState(false)

  const toggleMobileNav = () => (setOpen(prev => !prev))

  //const closeMobileNav = () => setOpen(false)
  const openMobileNave = () => setOpen(true)
  const pathName = usePathname()


  return (
    <div>
      <Sheet>
        <SheetTrigger asChild className="" onClick={toggleMobileNav}><CiMenuFries className="section-titles fill-white text-xl font-bold text-white block lg:hidden cursor-pointer" /></SheetTrigger>
        <SheetContent side="left" onClick={toggleMobileNav} className="min-h-[100vh] overflow-x-auto pt-[4rem] flex flex-col justify-between gap-0">
          <div className=" grid gap-4">
            {
              navItmes.map((item:Item, i) => (
                <SheetClose key={i} asChild>


                  <Link href={item.link} className="text-black/60 hover:text-black text-lg font-medium">
                    <FadeInComponent
                      className={`${pathName === item.link ? "bg-orange-200" : ""} text-lg font-medium p-1 rounded`}
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
            <SocialMedia x=""/>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNav