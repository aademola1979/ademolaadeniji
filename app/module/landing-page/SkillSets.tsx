
import ProgrammingLanguages from "./ProgrammingLanguages"


const SkillSets = () => {
  return (
    <section className="bg-white/90 p-[2rem] third-section shadow-sm">
                <h4 className="section-titles text-2xl font-bold text-center sm:text-4xl section-titles mb-4">Skill Sets</h4>
                <p className="text-[rgb(150, 150, 150)] text-lg mb-2 pr-0  text-gray-800 container-px">I am skilled in the following programming languages, frameworks, libraries anf platforms:</p>
                <div className="">
                    <ProgrammingLanguages />
                </div>
</section>
  )
}

export default SkillSets