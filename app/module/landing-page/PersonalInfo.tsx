import { MdOutlineAlternateEmail, } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";

const PersonalInfo = () => {
  return (
   
      <div className="flex flex-col justify-center items-center my-[1rem]">
        <h5 className="text-[rgba(0, 0, 0, 0.8)] section-titles">Contacts:</h5>
        <div className="grid gap-2 contact-wrapper">
          <div className="flex gap-2">
            <span className="pt-1 text-base font-bold text-orange-500"><MdOutlineAlternateEmail /></span>
            <a href="https://aademola750@gmail.com" target="_blank" className="text-blue-500">aademola750@gmail.com</a>
          </div>
          <div className="flex gap-2">
            <span className="pt-1 text-base font-bold text-orange-500"><FaMobileAlt /></span>
            <a href="tel:+2349045951202" className="text-blue-500">+234 904 5950 212</a>
          </div>
      </div>
    </div>
  )
}

export default PersonalInfo