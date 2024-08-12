
import CallToAction from "@/app/module/landing-page/CTA"
import AboutSectionOne from "../../module/about/AboutSectionOne"
import Call2Action from "@/app/module/about/CallToAction"


const AboutPage = () => {
  return (
    <main className=" relative logo text-white border-t-2 border-white">
      <AboutSectionOne />
      <div className="bg-white rounded-t-md bg-white/60">
      <CallToAction />
      </div>
      
    </main>
  )
}

export default AboutPage