import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import DropdownMenuComponent from "../DropDownMenuComponent"

   function MainNav() {

    

    return (
     
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
                    <BreadcrumbLink href='/my-works'>My Works</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem  className="text-[1rem]">
                    <BreadcrumbLink href='/git-repos'>Git Repos</BreadcrumbLink>
                </BreadcrumbItem> 
        </BreadcrumbList>
      </Breadcrumb>
    )
  }

  export default MainNav
  