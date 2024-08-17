import { FadeInComponent, SpringInVaraintComponent, StaggerContainer, ZoomInComponent, ZoomOutComponent } from "@/app/module/AnimatedContainer"
import ContactFormContainer from "@/app/module/contact-form"
import ContactHeader from "@/app/module/contact-form/ContactHeader"
import Image from "next/image"



const ContactPage = () => {
  return (
    <StaggerContainer className="pb-[2rem] container-px flex flex-col w-full pt-[2rem]">
      
      <div className="flex flex-col rico lg:flex-row">
        <div className="flex flex-wrap gap-2">
        <SpringInVaraintComponent
          delay={1}
          duration={1.8}
          direction='left'
         className="flex justify-cente max-w-fitflex-2">
          <Image src='/images/connect3.png' width={200} height={200} alt="connect"
            className="h-[4rem] w-[6rem] lg:h-[15rem] lg:w-[15rem]" />
        </SpringInVaraintComponent>
        <FadeInComponent
         delay={0.5}
         duration={1}
         direction='down'
         type='tween'
         viewport={{ once:true }}
         className="text-xl lg:text-4xl">Let&apos;s connect!</FadeInComponent>

        </div>
      
        <div className="flex-1 block">
          <ContactFormContainer />
        </div>
      </div>
      <div className="text-center w-full rico">OR</div>
      <ContactHeader />
    </StaggerContainer>
  )
}

export default ContactPage