import { fadeIn } from "@/lib/motion";
import {motion} from "framer-motion";
import Image from "next/image";

const WorkCard = ({workCardProp, setActive}) => {
   const {work, index, active,} = workCardProp;
   const {id, title, description, category, imgUrl, siteUrl} = work;

  return (
    <motion.div
    variants={fadeIn('right', 'spring', index * 0.25, 0.75)}
    className={`relative ${active === id ? 'active-work-card' : 'inactive-work-card'} project-card ease-out-flex`}
      onClick={()=>setActive(id)}>
        <img src={imgUrl} alt={title} height={700} width={160}
        className="absolute w-full h-full object-cover rounded-3xl"/>
        { active !== id 
          ? (<h3 className="inactive-h3">
            {title}
            </h3>
            )
          : (<div className="absolute xl:p-8 px-8 py-2 bottom-0 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]"
          >
            <div className= "flex  justify-center items-center w-[60px] h-[60px] rounded-3xl glassmorphism mb-[12px]"
          >
           {title} 
          </div>
          <p className="text-normal text-[16px] leading-[20px] text-white uppercase truncate">{}</p>

          </div>
          )

        }
     
    </motion.div>
  )
}

export default WorkCard