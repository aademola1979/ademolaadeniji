import AboutHeader from "./AboutHeader"
import AboutImage from "./AboutImage"
import AboutIntro from "./AboutIntro"
import AboutIntro2 from "./AboutIntro2"


const AboutSectionOne = () => {
  return (
    <div className="container-px pb-[2rem]">
      <AboutHeader />
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 switch-container">
        <AboutIntro />
        <AboutImage />
      </div>
      <AboutIntro2 />

    </div>
  )
}

export default AboutSectionOne