/* eslint-disable @next/next/no-img-element */
import Link from "next/link"


const Hero = () => {
  return (
    <div className="relative overflow-hidden min-w-full h-[550px] bg-white/80 rounded">
      <img src="/images/d-man.png" alt="Ademola" width={200} height={320} className="absolute top-0 left-0 rounded w-full h-full"/>
      <div className="relative mb-[1rem] mt-[20rem] grid gap-4">
        <div className="hero-text-container grid lg:hidden">
          <p className="hero-text-name">Ademola Adeniji</p>
          <p className="hero-text-position">Software Developer</p>
        </div>
        <div className="flex w-full justify-around lg:hidden">
         <Link href='/git-repos' className="hover:scale-105 btn py-4 w-[8rem] text-center text-base hero-btn btn-blue font-normal">Git Repo.</Link>
          <Link href='/projects' className="hover:scale-105 btn hero-btn btn-outline py-4 w-[8rem] text-center text-base font-semibold">Projects</Link>
        </div>

      </div>

    </div>
  )
}

export default Hero