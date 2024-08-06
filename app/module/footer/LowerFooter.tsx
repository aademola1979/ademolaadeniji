import SocialMedia from "../landing-page/SocialMedia"


const LowerFooter = () => {
  return (
    <div className="text-gray-500 text-sm my-4 w-full flex justify-between">
      <span>&copy; {new Date().getFullYear()} Ademola Adeniji. All Rights Reserved.</span>
      <SocialMedia />
    </div>
  )
}

export default LowerFooter