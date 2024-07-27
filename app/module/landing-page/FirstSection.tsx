
import Hero from "./Hero"
import PersonalInfo from "./PersonalInfo"
import SocialMedia from "./SocialMedia"


const FirstSection = () => {
  return (
    <section className="w-full">
      <Hero />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1">
        <PersonalInfo />
        <SocialMedia />
      </div>
    </section>
  )
}

export default FirstSection