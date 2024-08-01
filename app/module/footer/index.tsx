import LowerFooter from "./LowerFooter"
import UpperFooter from "./UpperFooter"


const Footer = () => {
  return (
    <footer className="bg-white/90 container-px py-4 grid w-full">
        <UpperFooter />
        <LowerFooter />
    </footer>
  )
}

export default Footer