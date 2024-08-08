import { FadeInComponent, StaggerContainer } from "../AnimatedContainer"


const AboutIntro = () => {
  return (
    <StaggerContainer className="container-px grid gap-[4rem] font-medium text-base lg:text-lg text-black/80 font-mono">
      <FadeInComponent
        delay={0.2}
        duration={1.2}
        direction='up'
        type='tween'
        viewport={{ once: true }}
        className=''>
        I am Ademola, the son of Adeniji. I am a software developer, specialising in web application creation.
      </FadeInComponent>

      <FadeInComponent
        delay={0.2}
        duration={1.2}
        direction='up'
        type='tween'
        viewport={{ once: true }}
        className=''>
        I devote my attention, energy and skills to creating software solutions for businesses, particularly start-ups.
        I myself being an owner of a start-up, I perfeclty understand the challenges start-ups face. Among other things, a start-up needs an effective, efficient, elegant yet affordable platform for visibility; and that&apos;s what I offer you.
      </FadeInComponent>
      
      <FadeInComponent
        delay={0.2}
        duration={1.2}
        direction='up'
        type='tween'
        viewport={{ once: true }}
        className=''>
        Bring your ideas and I will bring my skills. Together, we will create a software solution that will help your bussiness and we will both grow together.
      </FadeInComponent>
    </StaggerContainer>
  )
}

export default AboutIntro