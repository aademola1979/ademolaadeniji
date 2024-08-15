import { StaggerContainer, ZoomInComponent } from "../AnimatedContainer"


const ContactHeader = () => {
  return (
    <StaggerContainer className='rico text-3xl lg:text-5xl'>
        <ZoomInComponent
        className='text-center w-full italic'
        delay={0.2}
        duration={1}
        >
            Let&apos;s connect.
        </ZoomInComponent>
    </StaggerContainer>
  )
}

export default ContactHeader