import ContactFormContainer from "@/app/module/contact-form"
import ContactHeader from "@/app/module/contact-form/ContactHeader"
import Loti from "@/app/module/contact-form/Loti"


const ContactPage = () => {
  return (
    <main className="container-px  py-[2rem]">
      <ContactHeader />
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 rico">
          <Loti/>
        </div>
        <div className="flex-1">
          <ContactFormContainer />
        </div>

      </div>

    </main>
  )
}

export default ContactPage