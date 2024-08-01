import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"

   function BreadCrumbNav() {

    

    return (
      <Breadcrumb className="hidden lg:block">
        <BreadcrumbList>
                <BreadcrumbItem  className="text-[1rem]">
                    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
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
    )
  }

  export default BreadCrumbNav
  