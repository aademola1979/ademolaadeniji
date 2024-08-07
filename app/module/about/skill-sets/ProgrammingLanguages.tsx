import Image from "next/image"
import Card from "./Card"
import CardWrapper from "./CardWrapper"



const ProgrammingLanguages = () => {
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
        name:"PHP",
        image:"/images/programming-languages/php.png",
    },
    {
        name:"Python",
        image:"/images/programming-languages/python.svg",
    },
  ]


  return (
   
        <CardWrapper title="Web Programming Languages">
            {
                programmingLanguages.map((tool, i)=>(
                    <Card key={i} tool={tool}/>
                ))
            }    
    </CardWrapper>

  
    
  )
}

export default ProgrammingLanguages