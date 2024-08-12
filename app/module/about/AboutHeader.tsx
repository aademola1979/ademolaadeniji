import { FadeInComponent, StaggerContainer } from "../AnimatedContainer"


const AboutHeader = () => {
  return (
    <StaggerContainer
      className="w-full grid justify-center items-center max-h-full pt-8
    lg:flex gap-2 mb-[4rem] container-px font-bold text-5xl italic font-mono text-orange-500">
      <FadeInComponent
        delay={0.5}
        duration={1.2}
        direction='right'
        type='tween'
        viewport={{ once: true }}
        className=''>
        Nice
      </FadeInComponent>

      <FadeInComponent
        delay={0}
        duration={1}
        direction='down'
        type='tween'
        viewport={{ once: true }}
        className=''>
        meeting
      </FadeInComponent>

      <div className="flex">
        <FadeInComponent
          delay={0.5}
          duration={1.2}
          direction='left'
          type='tween'
          viewport={{ once: true }}
          className=''>
          you
        </FadeInComponent>
        <FadeInComponent
          delay={0.5}
          duration={2}
          direction='left'
          type='tween'
          viewport={{ once: true }}
          className=''>
          !
        </FadeInComponent>
      </div>
    </StaggerContainer>

  )
}

export default AboutHeader