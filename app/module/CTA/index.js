import Image from "next/image"
import PersonalInfo from "../landing-page/PersonalInfo"
import SocialMedia from "../landing-page/SocialMedia"
import Link from "next/link"


const CallToAction = () => {
  return (
    <section className="h-[450px] bg-white py-4 ">
        <div className="flex w-full justify-center contact-btn--wrapper hover:scale-105 duration-200 ease-in-out transition-all">
          <Link href="/contact" className="rounded-full border border-gray-500 p-2  section-titles">Contact Me Now</Link>
        </div>
        <PersonalInfo />
        <SocialMedia />
    </section>
  )
}

export default CallToAction