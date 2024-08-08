
import CallToAction from "@/app/module/landing-page/CTA"
import Hero from "./Hero"
import { FadeInComponent, StaggerContainer } from "../AnimatedContainer"
import { once } from "events"

const FirstSection = () => {
  return (
    <StaggerContainer className="w-full grid gap-4">
      <Hero />
      <FadeInComponent
        delay={0.5}
        duration={1.2}
        direction='up'
        type='tween'
        viewport={{ once:true }}
       className="hidden h-fit lg:grid rounded-xl shadow-md">
        <CallToAction />
      </FadeInComponent>
    </StaggerContainer>
  )
}

export default FirstSection