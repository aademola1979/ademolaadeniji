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
        Currently, I focus my energy and skills on creating web applications for individuals, organisations, and businesses. I believe that every entity deserves an efficient, elegant, and affordable platform for visibility, and that's exactly what I offer.
      </FadeInComponent>
      <FadeInComponent
        delay={0.2}
        duration={1.2}
        direction='up'
        type='tween'
        viewport={{ once: true }}
        className=''>
        Whether you're looking to enhance your online presence or need a custom web solution, I am here to help you achieve your goals with precision and creativity.
      </FadeInComponent>
    </StaggerContainer>
  )
}

export default AboutIntro2