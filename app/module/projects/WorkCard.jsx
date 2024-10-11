/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { fadeIn } from "@/lib/motion";
import { motion } from "framer-motion";


const WorkCard = ({ workCardProp, setActive }) => {
  const { work, index, active, } = workCardProp;
  const { id, title, description, category, imgUrl, siteUrl } = work;

  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.25, 0.75)}
      className={`relative ${active === id ? 'active-work-card' : 'inactive-work-card'} project-card ease-out-flex` }
      onClick={() => setActive(id)}>
       <img src={imgUrl} alt={title} height={700} width={160}
        className="project-img" />
      {active !== id
        ? (<h3 className="inactive-h3">
          {title}
        </h3>
        )
        : (<div className="active-div min-w-full max-w-full max-h-full overflow-hidden">
          <div className="flex justify-between px-2">

            <div className="text-start project-category h-[60px] py-1 px-4 text-white rounded-3xl glassmorphism mb-[4rem]">
              {category}
            </div>
            <a href={siteUrl} target="_blank" className="text-base font-medium text-white flex justify-center">
              <Button variant="link" className="text-base font-medium text-white">Visit Site</Button>
            </a>
          </div>
         <p className="active-p">{description}</p>

        </div>

        )

      }

    </motion.div>
  )
}

export default WorkCard