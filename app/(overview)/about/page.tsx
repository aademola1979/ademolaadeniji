
import CallToAction from "@/app/module/landing-page/CTA"
import AboutSectionOne from "../../module/about/AboutSectionOne"



const AboutPage = () => {
  return (
    <main className=" relative logo text-white mt-1">
      <AboutSectionOne />
      <div className="rounded-t-md bg-white py-[4rem]">
      <CallToAction />
      </div>
      
    </main>
  )
}

export default AboutPage