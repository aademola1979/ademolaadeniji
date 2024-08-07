import AboutHeader from "../../module/about/AboutHeader"
import AboutSectionOne from "../../module/about/AboutSectionOne"
import SkillSets from "../../module/about/skill-sets"


const AboutPage = () => {
  return (
    <main className="mt-[4rem]">
      <AboutSectionOne />
      <SkillSets />
    </main>
  )
}

export default AboutPage