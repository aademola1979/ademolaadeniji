import { FadeInComponent, StaggerContainer } from "../AnimatedContainer"


const AboutHeader = () => {
  return (
    <StaggerContainer
      className="w-full grid justify-center items-center max-h-full pt-8
    lg:flex lg:flex-row gap-0 lg:gap-2 mb-[4rem] container-px font-bold text-[42px] lg:text-[82px] italic font-mono text-orange-200">
      <FadeInComponent
        delay={0.5}
        duration={1.2}
        direction='right'
        type='tween'
        viewport={{ once: true }}
        className='py-0'>
        Nice
      </FadeInComponent>

      <FadeInComponent
        delay={0}
        duration={1}
        direction='down'
        type='tween'
        viewport={{ once: true }}
        className='py-0'>
        meeting
      </FadeInComponent>

      <div className="flex">
        <FadeInComponent
          delay={0.5}
          duration={1.2}
          direction='left'
          type='tween'
          viewport={{ once: true }}
          className='py-0'>
          you
        </FadeInComponent>
        <FadeInComponent
          delay={0.5}
          duration={2}
          direction='left'
          type='tween'
          viewport={{ once: true }}
          className='py-0'>
          !
        </FadeInComponent>
      </div>
    </StaggerContainer>

  )
}

export default AboutHeader