import { TiTick } from "react-icons/ti";
const Offers = () => {
    const offers = [
        {
            text: "e-commerce web applications."
        },
        {
            text: "blog websites."
        },
        {
            text: "personal profile websites."
        },
        {
            text: "school and other educational institution web applications."
        }

    ]
    return (
        <section className="bg-white shadow-md mt-4 py-2 grid items-center ">
            <h4 className="text-2xl font-bold text-center sm:text-4xl section-titles mb-4">What I Offer</h4>
            <div>
                <p className="text-[rgb(150, 150, 150)] text-base mb-2 sm:text-lg pr-0  text-gray-800 container-px">
                    Responsive, dynamic, SEO-friendly, user-friendly, attractive and scalable:
                </p>
                <ul className="container-px text-base sm:text-lg">
                    {
                        offers.map((offer, i)=>(
                            <li key={i} className="flex gap-2">
                                <span className="pt-1 text-orange-500"><TiTick /></span>
                                <span>{offer.text}</span>
                            </li>
                        ))
                    }

                </ul>

            </div>


        </section>
    )
}

export default Offers