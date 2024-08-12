import { FadeInComponent, StaggerContainer } from "../AnimatedContainer"


const AboutIntro2 = () => {
  return (
    <StaggerContainer className="container-px grid text-white/80 gap-[4rem] font-medium text-base lg:text-lg font-mono pt-[4rem]">
        <FadeInComponent
        delay={0.2}
        duration={1.2}
        direction='up'
        type='tween'
        viewport={{ once: true }}
        className=''>
        Currently, I devote my attention, energy and skills to creating web applications for individuals, organisations and businesses.
      </FadeInComponent>
      <FadeInComponent
        delay={0.2}
        duration={1.2}
        direction='up'
        type='tween'
        viewport={{ once: true }}
        className=''>
        Every business, organisation or individual needs an efficient, elegant yet affordable platform for visibility. That&apos;s exactly what I offer.
      </FadeInComponent>
    </StaggerContainer>
  )
}

export default AboutIntro2