import { FadeInComponent, StaggerContainer } from "../AnimatedContainer"


const AboutHeader = () => {
  return (
    <StaggerContainer
      className="w-full my-[2rem] grid justify-center items-center max-h-full
    lg:flex lg:mt-[3rem] gap-2 mb-[4rem] container-px font-bold text-5xl italic font-mono">
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