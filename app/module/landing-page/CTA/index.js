
import PersonalInfo from "../PersonalInfo"

import Link from "next/link"


const CallToAction = () => {
  return (
    <section className="bg-white/90 py-4 rounded-lg lg:rounded-xl">
        <div className="flex w-full justify-center contact-btn--wrapper hover:scale-105 duration-200 ease-in-out transition-all">
          <Link href="/contact" className="rounded-full border border-gray-500 p-2  section-titles">Contact Me Now</Link>
        </div>
        <PersonalInfo />
    </section>
  )
}

export default CallToAction