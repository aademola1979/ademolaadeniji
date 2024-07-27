import { MdOutlineAlternateEmail, } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";

const PersonalInfo = () => {
  return (
    <div className="personal-info-section gen-pad">
      <div className="contact-container">
        <h5 className="text-[rgba(0, 0, 0, 0.8)] my-[1rem] section-titles">Contacts:</h5>
        <div className="grid gap-2 contact-wrapper">
          <div className="flex gap-2">
            <span className="pt-1 text-base font-bold text-orange-500"><MdOutlineAlternateEmail /></span>
            <a href="aademola750@gmail.com" className="text-blue-500">aademola750@gmail.com</a>
          </div>
          <div className="flex gap-2">
            <span className="pt-1 text-base font-bold text-orange-500"><FaMobileAlt /></span>
            <a href="tel:+2349045951202" className="text-blue-500">+234 904 5950 212</a>
          </div>


        </div>
      </div>

    </div>
  )
}

export default PersonalInfo