import SocialMedia from "../landing-page/SocialMedia"
import Logo from "../Logo"


const UpperFooter = () => {
  return (
    <div className="pt-4 w-full flex-wrap flex justify-between">
      <Logo className="py-2 px-3"/>
      <SocialMedia x="fill-white"/>
    </div>
  )
}

export default UpperFooter