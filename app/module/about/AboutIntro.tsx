import { FadeInComponent, StaggerContainer } from "../AnimatedContainer"


const AboutIntro = () => {
  return (
    <StaggerContainer className="container-px grid text-white/80 gap-[4rem] font-medium text-base lg:text-lg font-mono switch-text">
      <FadeInComponent
        delay={0.2}
        duration={1.2}
        direction='up'
        type='tween'
        viewport={{ once: true }}
        className=''>
        I am Ademola Adeniji, a software developer, particularly skilled at Javascript and Python; and specialising in web application creation.
      </FadeInComponent>

      <FadeInComponent
        delay={0.2}
        duration={1.2}
        direction='up'
        type='tween'
        viewport={{ once: true }}
        className=''>
        As a person with quests for knowledge and creative ventures, I participated in the <span className="font-bold text-orange-500">Federal Government of Nigeria&apos;s Three Million Technical Training (3MTT)</span>. During the programme, I studied Software Development and had hands-on training and experience under <span className="font-bold text-orange-500">CAD Consultant</span>, a tech company in Port Harcourt, Rivers State, Nigeria.
      </FadeInComponent>
    </StaggerContainer>
  )
}

export default AboutIntro