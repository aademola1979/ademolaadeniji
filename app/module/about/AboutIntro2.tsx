import { FadeInComponent, StaggerContainer } from "../AnimatedContainer"


const AboutIntro2 = () => {
  return (
    <StaggerContainer className="container-px grid rico gap-[4rem] font-medium text-[20px] lg:text-[22px] font-mono pt-[4rem]">
        <FadeInComponent
        delay={0.2}
        duration={1.2}
        direction='up'
        type='tween'
        viewport={{ once: true }}
        className=''>
        Currently, I focus my energy and skills on creating web applications for individuals, organisations, and businesses. I believe that every entity deserves an efficient, elegant, and affordable platform for visibility, and that&apos;s exactly what I offer.
      </FadeInComponent>
      <FadeInComponent
        delay={0.2}
        duration={1.2}
        direction='up'
        type='tween'
        viewport={{ once: true }}
        className=''>
        Whether you&apos;re looking to enhance your online presence or need a custom web solution, I am here to help you achieve your goals with precision and creativity.
      </FadeInComponent>
    </StaggerContainer>
  )
}

export default AboutIntro2