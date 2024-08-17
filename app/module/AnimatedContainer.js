'use client'
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant, textContainer, zoomIn, planetVariants,
  zoomOut, textVariant2, sidebarVaraints, navVariants, slidingVariants, slidingVariants2 } from "@/lib/motion";

export const FadeInComponent = ({children, className, direction, type, delay,duration, ...props}) => {
    return (
      <motion.div
      variants={fadeIn(direction, type, delay, duration)}
      initial='hidden'
      whileInView='show'
      className={`${className}`}
      {...props}
      >
          {children}
      </motion.div>
    )
  }

  export const StaggerContainer = ({children, className, ...props}) => {
    return (
      <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      {...props}
       className={`${className}`}>
          {children}
      </motion.div>
    )
  }
  

 export const TextVariantComponent = ({delay, children, className, ...props}) => {
    return (
      <motion.span
                  variants={textVariant(delay)}
                  initial='hidden'
                  whileInView='show'
                  className={`${className}`}
                  {...props}>
                      {children}
                  </motion.span>
    )
  }

  export const TextVariant2Component = ({ children, className, ...props}) => {
    return (
      <motion.span
                  variants={textVariant2}
                  initial='hidden'
                  whileInView='show'
                  className={`${className}`}
                  {...props}>
                      {children}
                  </motion.span>
    )
  }
  

  
  export const TextContainer = ({children, className, ...props}) => {
      return (
        <motion.p
                    variants={textContainer} 
                    initial='hidden'
                    whileInView='show'
                    className={`${className}`}
                    {...props}>
                      {children}
                    </motion.p>
      )
    }


    export const ZoomInComponent = ({className, children, delay, duration, ...props}) => {
        return (
                  <motion.div
                  variants={zoomIn(delay, duration)}
                  initial='hidden'
                  whileInView='show'
                  {...props}
                   className={`${className}`}>
                      {children}
                  </motion.div>
          
        )
      }


     export const ZoomOutComponent = ({className, children, delay, duration, ...props}) => {
        return (
                  <motion.div
                  variants={zoomOut(delay, duration)}
                  initial='hidden'
                  whileInView='show'
                   className={`${className}`}
                   {...props}>
                      {children}
                  </motion.div>
          
        )
      }
export const SidebarNavComponent = ({className, children, ...props})=>{
  return(
    <motion.div
    {...props}
    variants={sidebarVaraints('right', 'tween', 0.25, 1)}
            initial='hidden'
            whileInView='show'
            exit='exit'
    className={`${className}`}>
      {children}
    </motion.div>
  )
}  

export const HeaderNavComponent = ({className, children, ...props})=>{
  return(
    <motion.nav
    variants={navVariants}
      initial="hidden"
      whileInView="show"
    className={`${className}`}
    {...props}>
      {children}
    </motion.nav>
  )
}

export const LinkBtnComponent = ({className, children, ...props}) =>{
  return(
    <motion.span 
    whileHover={{ scale: 1.1, originX:0 }}
    transition={{ type:'spring', stiffness:220 }}
    className={`${className} rounded-md px-1 min-w-fit font-mono flex`}
    {...props}>
           {children}
    </motion.span>

  )
}


export const SlidingVaraintComponent = ({children, className, ...props}) => {
  return (
    <motion.div
    variants={slidingVariants}
    initial='hidden'
    whileInView='show'
    exit='exit'
    {...props}
    className={`${className}`}>
      {children}

    </motion.div>
  )
}

export const SlidingVariantComponent2 = ({children, className, 
  direction, type, duration, delay, ...props}) =>{
  return (
    <motion.div
    variants={slidingVariants2(direction, delay, type, duration)}
    initial = 'hidden'
    whileInView='show'
    exit='exit'
    {...props}
    className={`${className}`}>
      {children}
    </motion.div>
  )

}

export const ListVaraintComponent = ({children, direction,
 delay, type, duration, className, ...props })=>{
  return (
    <motion.ul
    variants={slidingVariants2(direction, type, delay, duration)}
    {...props}
    className={`${className}`}>
      {children}
    </motion.ul>
  )
}
export const SpringInVaraintComponent = ({children, direction,
  delay, duration, className, ...props })=>{
   return (
     <motion.div
     variants={planetVariants(direction, delay, duration)}
     {...props}
     className={`${className}`}>
       {children}
     </motion.div>
   )
 }
export const SubmitBtnComponent = ({className, children, ...props}) =>{
  return(
    <motion.button 
    whileHover={{ scale: 1.1, originX:0 }}
    transition={{ type:'spring', stiffness:220 }}
    className={`${className} rounded-md justify-center font-mono flex`}
    {...props}>
           {children}
    </motion.button>

  )
}