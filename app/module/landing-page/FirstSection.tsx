
import CallToAction from "../CTA"
import Hero from "./Hero"

const FirstSection = () => {
  return (
    <section className="w-full grid gap-4">
      <Hero />
      <div className="hidden h-fit lg:grid rounded-xl shadow-md">
        <CallToAction />
      </div>
    </section>
  )
}

export default FirstSection