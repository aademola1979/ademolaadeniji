import ProjectCard from "./ProjectCard"
import WrapperProjectCard from "./WrapperProjectCard"




const Projects = () => {
  const projects = [
    {
      title: "E-Commerce",
      header: "Debitis, cupiditate",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia saepe laudantium nemo exercitationem repellat, quas nobis neque magnam officiis.",
      footer: "See Site",
      link: "#"
    },
    {
      title: "Organisation Website",
      header: "consectetur adipisicing elit.",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia saepe laudantium nemo exercitationem repellat, quas nobis neque magnam officiis.",
      footer: "See Site",
      link: "#"
    },
  
    {
      title: "Blog Site",
      header: "quas nobis neque magnam",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia saepe laudantium nemo exercitationem repellat, quas nobis neque magnam officiis.",
      footer: "See Site",
      link: "#"
    },
    

  ]
  return (
    <div className=" bg-white/70 p-8 lg:px-[4rem] mt-4">
      <h3 className="section-titles text-center mb-8 text-xl lg:text-4xl">Projects</h3>
      <WrapperProjectCard>
        {
          projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))
        }
      </WrapperProjectCard>

    </div>

  )
}

export default Projects