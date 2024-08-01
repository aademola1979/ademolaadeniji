import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import RichLine from "../../RichLine"

type Project = {
  title:string,
  header?: string,
  description:string,
  content:string,
  footer: string,
  link?: string

}
const ProjectCard = ({project}:{project:Project}) => {
  const {title, header, description, content, footer} = project;
  return (
   
      <Card className={`${title === "E-Commerce" ? "row-span-2" :"row-span-1"} !min-w-[16rem] snap-start`}>
       <CardTitle className="text-center pt-2">{title}</CardTitle>

      <CardDescription className="pl-4">{description}</CardDescription>
      <CardContent>{content}</CardContent>
      <CardFooter className="flex justify-center"><RichLine href='/' className="">{footer}</RichLine></CardFooter>
    </Card>
  )
}

export default ProjectCard