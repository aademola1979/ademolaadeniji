/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import {FadeInComponent} from '@/app/module/AnimatedContainer'
import { once } from "events"

const Hero = () => {
  return (
    <FadeInComponent 
        delay={0.5}
        duration={1.2}
        direction='right'
        type='tween'
        viewport={{ once:true }}
    className="relative overflow-hidden min-w-full h-[500px] sm:h-[600px] lg:h-[500px] rounded-sm">
      <img src="/images/de-man-light.png" alt="Ademola" width={200} height={320} className="absolute top-0 left-0 rounded w-full h-full"/>
      <div className="relative mb-[1rem] mt-[18rem] sm:mt-[22rem] grid gap-4">
        <div className="hero-text-container grid lg:hidden rounded-lg">
          <p className="hero-text-name font-serif text-black cursor-pointer">Ademola Adeniji</p>
          <p className="hero-text-position fon cursor-default">Software Developer</p>
        </div>
        <div className="flex w-full justify-around lg:hidden">
         <Link href='/about' className="hover:scale-105 btn py-4 w-[8rem] text-center text-base hero-btn btn-blue font-normal">About Me</Link>
          <Link href='/my-works' className="hover:scale-105 btn hero-btn btn-outline py-4 w-[8rem] text-center text-base font-semibold">My Works</Link>
        </div>

      </div>

    </FadeInComponent>
  )
}

export default Hero