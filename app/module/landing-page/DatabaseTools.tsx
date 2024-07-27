import Card from "./Card"
import CardWrapper from "./CardWrapper"


const DatabaseTools = () => {
    const databaseTools=[
        {
            name:"MYSQL",
            image:"/images/database/mysql.svg",
           
        },
        {
            name:"Postgresql",
            image:"/images/database/postgresql.svg",
            
        },
        {
            name:"MongoDB",
            image:"/images/database/mongodb.svg",
        }
    ]
  return (
    <CardWrapper title="Database Languages">
        {
            databaseTools.map((tool, i)=>(
                
                <Card key={i} tool={tool}/>
            ))
        }
    </CardWrapper>
  )
}

export default DatabaseTools