

import Image from "next/image"



const SocialMedia = () => {
  return (
    <div className="socials-section pl-8 lg:pl-0">
      <h5 className="text-[rgba(0, 0, 0, 0.8)] section-titles">Social Media:</h5>
      <div className="socials-icons">
        <a href="https://www.linkedin.com/in/ademola-adeniji-1b73b252/" className="h-6 w-6 aspect-square rounded hover:scale-125 cursor-pointer transition-all ease-in-out duration-200" target="_blank"><Image src="/images/LinkedIn.png" alt="facebook" className="h-full w-full aspect-square rounded" height={40} width={40} /></a>
        <a href="https://www.instagram.com/adeniji.ademola/" className="h-6 w-6 aspect-square rounded hover:scale-125 cursor-pointer transition-all ease-in-out duration-200 "><Image src="/images/instagram.jpg" alt="facebook" className="h-full w-full aspect-square rounded" height={40} width={40} /></a>
        <a href="https://x.com/Adeniji7owa" className="h-6 w-6 aspect-square rounded hover:scale-125 transition-all ease-in-out duration-200 cursor-pointer"><Image src="/images/twitter.png" alt="facebook" className="h-full w-full aspect-square rounded" height={40} width={40} /></a>
        <a href="https://web.facebook.com/ademola.adeniji3" className="h-7 w-7 aspect-square rounded hover:scale-125 transition-all ease-in-out duration-200 cursor-pointer"><Image src="/images/facebook.jpg" alt="facebook" className="h-full w-full aspect-square rounded" height={40} width={40} /></a>
      </div>
    </div>
  )
}

export default SocialMedia