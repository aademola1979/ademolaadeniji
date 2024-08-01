import Card from "./Card"
import CardWrapper from "./CardWrapper"


const ServerSideFrameworkAndLibraries = () => {
    const serverSideTools=[
        {
            name:"Nextjs",
            image:"/images/frameworks-and-libraries/next.svg",
          
        },
        {
            name:"Expressjs",
            image:"/images/frameworks-and-libraries/expressjs.png",
        },
        {
            name:"Django",
            image:"/images/frameworks-and-libraries/django.svg",
        },
        {
            name:"FastAPI",
            image:"/images/frameworks-and-libraries/fastapi.svg",
        },
        {
            name:"Flask",
            image:"/images/frameworks-and-libraries/flask.svg",
        },
        {
            name:"Laravel",
            image:"/images/frameworks-and-libraries/laravel.svg",
        },
        {
            name:"Nodejs",
            image:"/images/frameworks-and-libraries/nodejs.svg",
        }, 
    ]
  return (
    
    <CardWrapper title="Server Frameworks and Libraries">
        {
            serverSideTools.map((tool, i)=>(
                
                <Card key={i} tool={tool}/>
            ))
        }
    </CardWrapper>
  )
}

export default ServerSideFrameworkAndLibraries