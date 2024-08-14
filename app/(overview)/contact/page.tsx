import ContactFormContainer from "@/app/module/contact-form"


const ContactPage = () => {
  return (
    <main className="container-px flex flex-col lg:flex-row py-[4rem]">
      <div className="flex-1 rico">Lottie</div>
      <div className="flex-1">
        <ContactFormContainer />
      </div>
    </main>
  )
}

export default ContactPage