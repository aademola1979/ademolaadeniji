import { StaggerContainer, ZoomInComponent, ZoomOutComponent } from "../AnimatedContainer"
import SocialMedia from "../landing-page/SocialMedia"


const ContactHeader = () => {
  return (
    <StaggerContainer className='rico text-xl lg:text-3xl'>
     
      <ZoomOutComponent
        className='flex w-full justify-center'
        delay={0.2}
        duration={1}
        viewport={{ once: true }}>
        <SocialMedia x="fill-white" />
      </ZoomOutComponent>
      
    </StaggerContainer>
  )
}

export default ContactHeader