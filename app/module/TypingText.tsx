import { textContainer, textVariant2 } from "@/lib/motion"
import {motion} from "framer-motion";


const TypingText = ({ text, textStyle }: { text: string, textStyle: string }) => {
    return (
        <motion.p
        variants={textContainer}
            className={`font-normal text-xl text-lg:2xl text-white/80 ${textStyle}`}>
            {Array.from(text).map((letter, index)=>(
            <motion.span
            variants={textVariant2}
            key={index}
            className="">
                {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
            ))
            }
        </motion.p>
    )
}

export default TypingText


export const TitleText = ({text, textStyle}:{text:string, textStyle:string}) =>{
    return(
        <motion.h2
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className={`mt-80px font-bold md:text-[64px] text-[40px] text-white/90 ${textStyle}`}>
            {text}
        </motion.h2>
    )
}