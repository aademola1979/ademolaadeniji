import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import DropdownMenuComponent from "../DropDownMenuComponent"

   function Nav() {

    

    return (
      <div className="flex gap-4">
      <Breadcrumb className="hidden lg:block">
        <BreadcrumbList>
                <BreadcrumbItem  className="text-[1rem]">
                    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                
                <BreadcrumbItem  className="text-[1rem]">
                    <BreadcrumbLink href='/about'>About Me</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />

                <BreadcrumbItem  className="text-[1rem]">
                    <BreadcrumbLink href='/contact'>Contact</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />

                <BreadcrumbItem  className="text-[1rem]">
                    <BreadcrumbLink href='/my-works'>My Wroks</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem  className="text-[1rem]">
                    <BreadcrumbLink href='/git-repos'>Git Repos</BreadcrumbLink>
                </BreadcrumbItem> 
        </BreadcrumbList>
      </Breadcrumb>
      <DropdownMenuComponent className="hidden"/>
      </div>
    )
  }

  export default Nav
  