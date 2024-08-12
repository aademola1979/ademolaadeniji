/* eslint-disable @next/next/no-img-element */

import React from 'react'
import { FadeInComponent } from '../AnimatedContainer'


const Call2Action = () => {
  return (
    <div
     className='w-full h-[250px] lg:h-[350px] relative'>
        <img src='/images/action.jpg' alt='call2action' height='250' width='250'
            className='w-full h-full z-0'/>
        <div
        className='absolute text-white top-0 bottom-0 left-0 right-0 w-full h-full z-20 bg-[rgba(0,0,0,0.4)]
        flex flex-col text-xl lg:text-2xl items-center justify-center'>
        <FadeInComponent
        delay={0.5}
        direction='up'
        duration={1}
        type='tween'
        viewport={{ once:true }} 
        className=''>
            hi
        </FadeInComponent>
            

        </div>

    </div>
  )
}

export default Call2Action