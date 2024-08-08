import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
 



   function MainNav() {

    

    return (
    
      <Breadcrumb className="hidden fixed top-2 right-1/2 translate-x-1/2 bg-white/80 backdrop-blur-md sm:flex items-center justify-center border rounded-full px-8 py-3 border-solid border-black/40 mt-2">
        <BreadcrumbList>
                <BreadcrumbItem  className="text-base">
                    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem  className="text-base">
                    <BreadcrumbLink href='/about'>About Me</BreadcrumbLink>
                </BreadcrumbItem> 
                <BreadcrumbSeparator />
                <BreadcrumbItem  className="text-base">
                    <BreadcrumbLink href='/contact'>Contact</BreadcrumbLink>
                </BreadcrumbItem>
                
        </BreadcrumbList>
      </Breadcrumb>
  

    )
  }

  export default MainNav
  