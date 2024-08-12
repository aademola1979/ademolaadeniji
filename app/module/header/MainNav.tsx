'use client'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
 
import { usePathname } from "next/navigation";


   function MainNav() {

  const pathName = usePathname();


    

    return (
    
      <Breadcrumb className="hidden fixed top-2 right-1/2 translate-x-1/2 bg-white/80 backdrop-blur-md lg:flex items-center justify-center border rounded-full px-8 py-3 border-solid border-black/40 mt-2">
        <BreadcrumbList>
                <BreadcrumbItem  className="text-base">
                    <BreadcrumbLink href='/' className={`${pathName === '/' ? "text-orange-400" : ""}`}>Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem  className="text-base">
                    <BreadcrumbLink href='/about' className={`${pathName === '/about' ? "text-orange-400" : ""}`}>About Me</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem  className="text-base">
                    <BreadcrumbLink href='/my-works' className={`${pathName === '/my-works' ? "text-orange-400" : ""}`}>My Works</BreadcrumbLink>
                </BreadcrumbItem> 
                <BreadcrumbSeparator />
                <BreadcrumbItem  className="text-base">
                    <BreadcrumbLink href='/contact' className={`${pathName === '/contact' ? "text-orange-400" : ""}`}>Contact</BreadcrumbLink>
                </BreadcrumbItem>
                
        </BreadcrumbList>
      </Breadcrumb>
  

    )
  }

  export default MainNav
  