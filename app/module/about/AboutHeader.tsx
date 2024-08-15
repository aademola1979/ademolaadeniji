import { FadeInComponent, StaggerContainer, ZoomInComponent } from "../AnimatedContainer"


const AboutHeader = () => {
  return (
    <StaggerContainer
      className="w-full grid justify-center items-center max-h-full pt-8
   gap-4 lg:gap-8 container-px font-bold text-[42px] lg:text-[82px] italic font-mono text-orange-200">
      <ZoomInComponent
        delay={0.5}
        duration={1.2}
        direction='right'
        type='tween'
        viewport={{ once: true }}
        className='py-0'>
        Nice
      </ZoomInComponent>

      <ZoomInComponent
        delay={0}
        duration={1}
        direction='down'
        type='tween'
        viewport={{ once: true }}
        className='py-0'>
        meeting
      </ZoomInComponent>

      <div className="flex">
        <ZoomInComponent
          delay={0.5}
          duration={1.2}
          direction='left'
          type='tween'
          viewport={{ once: true }}
          className='py-0'>
          you
        </ZoomInComponent>
        <ZoomInComponent
          delay={0.5}
          duration={2}
          direction='left'
          type='tween'
          viewport={{ once: true }}
          className='py-0'>
          !
        </ZoomInComponent>
      </div>
    </StaggerContainer>

  )
}

export default AboutHeader