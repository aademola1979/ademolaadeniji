import { FadeInComponent, StaggerContainer } from "../AnimatedContainer"


const AboutImage = () => {
    return (
        <div className=''>
            <div
               
                className='grid justify-center items-center  switch-image'
            >
                <img src="/images/socialBanner.png" alt="banner" height={250} width={240}
                    className="w-[200px] h-[200px]" />

            </div>
        </div>
    )
}

export default AboutImage