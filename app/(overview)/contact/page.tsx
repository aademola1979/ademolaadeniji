import { FadeInComponent, SpringInVaraintComponent, StaggerContainer } from "@/app/module/AnimatedContainer"
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
          <Image src='/images/connect3.png' 
          width={200} 
          height={200} 
          priority
          alt="connect"
          sizes="(max-width: 360px) 10px, (max-width: 780px) 40vw, 20vw "
          className="h-[4rem] w-[6rem] lg:h-[15rem] lg:w-[15rem]" />
        </SpringInVaraintComponent>
        <div className="grid lg:flex gap-4 ">
        <FadeInComponent
         delay={0.5}
         duration={1}
         direction='down'
         type='tween'
         viewport={{ once:true }}
         className="text-xl lg:text-4xl">Let&apos;s connect!</FadeInComponent>
         <ContactHeader />

        </div>
       
        </div>
      
        <div className="flex-1 block">
          <ContactFormContainer />
        </div>
      </div>
   
      
    </StaggerContainer>
  )
}

export default ContactPage