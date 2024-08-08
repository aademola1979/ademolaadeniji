import { FadeInComponent, StaggerContainer } from "../AnimatedContainer"


const AboutIntro = () => {
  return (
    <StaggerContainer className="container-px grid gap-[4rem] text-base lg:text-lg">
      <FadeInComponent
        delay={0.5}
        duration={1.2}
        direction='up'
        type='tween'
        viewport={{ once: true }}
        className=''>
        I am Ademola, the son of Adeniji. I am a software developer, specialising in web application creation.
      </FadeInComponent>

      <FadeInComponent
        delay={0.5}
        duration={1.2}
        direction='up'
        type='tween'
        viewport={{ once: true }}
        className=''>
        I speak English as Second and Official Language and have both B.A. and M.A. in English Language; but speak Yoruba, an indigenous language in Nigeria, as First Language.
      </FadeInComponent>

      <FadeInComponent
        delay={0.5}
        duration={1.2}
        direction='up'
        type='tween'
        viewport={{ once: true }}
        className=''>
          My interest in human languages, arts, creativity and logical reasoning led to interest in computer languages, software design and creation.
        I self-trained for some years before having the honour of being part of the Federal Government of Nigeria&apos;s Three Million Technical Training (3MTT) programme, in which I opted for studying Software Development.
      </FadeInComponent>

      <FadeInComponent
        delay={0.5}
        duration={1.2}
        direction='up'
        type='tween'
        viewport={{ once: true }}
        className=''>
        During the 3MTT programme, I had hands-on training and practical experience under CAD Consultant, a tech company in Port Harcourt, Nigeria.
      </FadeInComponent>

      <FadeInComponent
        delay={0.5}
        duration={1.2}
        direction='up'
        type='tween'
        viewport={{ once: true }}
        className=''>
        Currently, I devote my attention, energy and skills to creating software solutions for businesses, particularly start-up, and individuals; through my own start-up, PragmaTech Nigeria.
        I myself being an owner of a start-up, I perfeclty understand the challenges start-ups face, particularly financially. Among other things, a start-up needs an effective and elegant platform for visibility and at an affordable price. And that&apos;s what I&apos;m here to offer you.
      </FadeInComponent>
      
      <FadeInComponent
        delay={0.5}
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