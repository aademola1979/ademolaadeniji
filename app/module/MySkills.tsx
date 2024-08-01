import {
    Carousel,
    CarouselContent,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import CarouselItemCard from "./landing-page/CarouselItemCard"

const MySkills = () => {
    const programmingLanguages = [
        {
            name:"Javascript",
            image:"/images/programming-languages/javascript.svg",
            
        },
    
        {
            name:"Typescript",
            image:"/images/programming-languages/typescript.svg",
        
        },
    
        {
            name:"Java",
            image:"/images/programming-languages/java.svg",
        },
        {
            name:"C#",
            image:"/images/programming-languages/Csharp.svg",
        },
        {
            name:"PHP",
            image:"/images/programming-languages/php.png",
        },
        {
            name:"Python",
            image:"/images/programming-languages/python.svg",
        },
      ]

    return (
        <Carousel className=" py-4 max-w-full">
            <CarouselContent>
            {
                programmingLanguages.map((tool, i)=>(
                    <CarouselItemCard key={i} tool={tool}/>
                ))
            }    
                
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default MySkills