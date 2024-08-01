
import CloudPlatforms from "./CloudPlatforms"
import DatabaseTools from "./DatabaseTools"
import FrontendFrameworkAndLibraries from "./Frontend"
import ProgrammingLanguages from "./ProgrammingLanguages"
import ServerSideFrameworkAndLibraries from "./ServerSide"


const SkillSets = () => {
  return (
    <section className="bg-gray max-w-full p-[2rem] third-section">
                <h4 className="text-white text-2xl font-bold text-center sm:text-4xl mb-4">Skill Sets</h4>
                <p className="text-[rgb(150, 150, 150)] text-lg mb-2 pr-0  text-white container-px">I am skilled in the following web programming languages, frameworks, libraries and platforms:</p>
                <div className="grid gap-12 px-8 relative">
                    <ProgrammingLanguages />
                    <FrontendFrameworkAndLibraries />
                    <ServerSideFrameworkAndLibraries />
                    <DatabaseTools />  
                </div>
</section>
  )
}

export default SkillSets