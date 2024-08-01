import siteMetadata from "@/lib/utility/siteMetadata"

import Image from "next/image"



const SocialMedia = () => {
  return (
    <div className="grid justify-center">
      <h5 className="text-[rgba(0, 0, 0, 0.8)] section-titles">Social Media:</h5>
      <div className="socials-icons">
        <a href={siteMetadata.linkedin} className="h-6 w-6 aspect-square rounded hover:scale-125 cursor-pointer transition-all ease-in-out duration-200" target="_blank">
          <Image src="/images/LinkedIn.png" alt="facebook" className="h-full w-full aspect-square rounded" height={40} width={40} />
        </a>
        <a href={siteMetadata.instagram} className="h-6 w-6 aspect-square rounded hover:scale-125 cursor-pointer transition-all ease-in-out duration-200 " target="_blank">
          <Image src="/images/instagram.jpg" alt="facebook" className="h-full w-full aspect-square rounded" height={40} width={40} />
        </a>
        <a href={siteMetadata.twitter} className="h-6 w-6 aspect-square rounded hover:scale-125 transition-all ease-in-out duration-200 cursor-pointer" target="_bank">
          <Image src="/images/twitter.png" alt="facebook" className="h-full w-full aspect-square rounded" height={40} width={40} />
        </a>
        <a href={siteMetadata.facebook} className="h-7 w-7 aspect-square rounded hover:scale-125 transition-all ease-in-out duration-200 cursor-pointer" target="_blank">
          <Image src="/images/facebook.jpg" alt="facebook" className="h-full w-full aspect-square rounded" height={40} width={40} />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia