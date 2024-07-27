import Image from "next/image"



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
        name:"Java",
        image:"/images/programming-languages/java.svg",
    },
    {
        name:"C#",
        image:"/images/programming-languages/c#.svg",
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
    <div>
        <div>
            {
                programmingLanguages.map((language, i)=>(
                    <span key={i}>{language.name}
                    <Image src={language.image} alt={language.name} height={40} width={40}/></span>
                ))
            }
        
        
        </div>
        <h3></h3>
     
    </div>
  )
}

export default ProgrammingLanguages