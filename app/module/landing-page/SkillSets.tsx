import FrameWork from "./FrameWork"
import Libraries from "./Libraries"
import ProgrammingLanguages from "./ProgrammingLanguages"


const SkillSets = () => {
  return (
    <section className="bg-white/90 p-[2rem] third-section shadow-sm">
                <h4 className="section-titles text-2xl font-bold text-center sm:text-4xl section-titles mb-4">Skill Sets and Tools</h4>
                <div className="">
                    <ProgrammingLanguages />
                    <Libraries />
                    <FrameWork />

                </div>
</section>
  )
}

export default SkillSets