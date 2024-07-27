
import CloudPlatforms from "./CloudPlatforms"
import DatabaseTools from "./DatabaseTools"
import FrontendFrameworkAndLibraries from "./Frontend"
import ProgrammingLanguages from "./ProgrammingLanguages"
import ServerSideFrameworkAndLibraries from "./ServerSide"


const SkillSets = () => {
  return (
    <section className="bg-white/90 pt-[2rem] third-section my-8 shadow-sm">
                <h4 className="section-titles text-2xl font-bold text-center sm:text-4xl section-titles mb-4">Skill Sets</h4>
                <p className="text-[rgb(150, 150, 150)] text-lg mb-2 pr-0  text-gray-800 container-px">I am skilled in the following programming languages, frameworks, libraries anf platforms:</p>
                <div className="grid gap-12">
                    <ProgrammingLanguages />
                    <FrontendFrameworkAndLibraries />
                    <ServerSideFrameworkAndLibraries />
                    <DatabaseTools />
                    <CloudPlatforms />
                </div>
</section>
  )
}

export default SkillSets