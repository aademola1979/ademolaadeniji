
import CloudPlatforms from "./CloudPlatforms"
import DatabaseTools from "./DatabaseTools"
import FrontendFrameworkAndLibraries from "./Frontend"
import ProgrammingLanguages from "./ProgrammingLanguages"
import ServerSideFrameworkAndLibraries from "./ServerSide"


const SkillSets = () => {
  return (
    <section className="logo max-w-full p-[2rem] third-section">
                <h4 className="text-white text-2xl font-bold text-center sm:text-4xl mb-4">Skill Sets</h4>
                <div className="grid px-8 relative">
                    <ProgrammingLanguages />
                    <FrontendFrameworkAndLibraries />
                    <ServerSideFrameworkAndLibraries />
                    <DatabaseTools />  
                </div>
</section>
  )
}

export default SkillSets