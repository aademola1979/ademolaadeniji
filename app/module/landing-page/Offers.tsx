import { TiTick } from "react-icons/ti";
import { FadeInComponent } from "../AnimatedContainer";
const Offers = () => {
    const offers = [
        {
            text: "e-commerce applications,"
        },
        {
            text: "school and educational institution web applications,"
        },
        {
            text: "blog sites,"
        },
        {
            text: "landing pages,"
        },
        {
            text: "personal profile sites,"
        },
        
        

    ]
    return (
        <FadeInComponent
        delay={0.2}
        duration={1.2}
        direction='up'
        type='tween'
        viewport={{ once:true }}
         className="py-[2rem] bg-white/90 shadow-md grid items-center rounded-md ">
            <h4 className="text-2xl font-bold text-center sm:text-4xl section-titles mb-4">What I Offer</h4>
            <div>
                <p className="text-[rgb(150, 150, 150)] text-base mb-2 sm:text-lg pr-0  text-gray-800 container-px">
                    Responsive, dynamic, SEO-friendly, user-friendly, attractive and scalable:
                </p>
                <ul className="container-px text-base sm:text-lg">
                    {
                        offers.map(({text}, i)=>(
                            <li key={i} className="flex gap-2">
                                <span className="pt-1 text-orange-500"><TiTick /></span>
                                <span>{i + 1 !== offers.length ? text : text.replace(',', '....')}</span>
                            </li>
                        ))
                    }

                </ul>

            </div>


        </FadeInComponent>
    )
}

export default Offers