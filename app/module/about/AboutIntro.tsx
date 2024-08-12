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
        I am Ademola Adeniji, a software developer with a strong proficiency in JavaScript and Python, specialising in web application development. 
      </FadeInComponent>
      <FadeInComponent
        delay={0.2}
        duration={1.2}
        direction='up'
        type='tween'
        viewport={{ once: true }}
        className=''>
        My passion for knowledge and creativity led me to participate in the Federal Government of Nigeria's Three Million Technical Training (3MTT) programme. During this programme, I gained valuable hands-on experience in software development with CAD Consultant, a tech company based in Port Harcourt, Rivers State, Nigeria.
      </FadeInComponent>
      
    </StaggerContainer>
  )
}

export default AboutIntro