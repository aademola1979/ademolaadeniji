import { StaggerContainer } from "../AnimatedContainer"
import LowerFooter from "./LowerFooter"
import UpperFooter from "./UpperFooter"


const Footer = () => {
  return (
    <footer className=" px-4 block container-px w-full border-t-2 border-orange-100">
        <UpperFooter />
        <LowerFooter />
    </footer>
  )
}

export default Footer