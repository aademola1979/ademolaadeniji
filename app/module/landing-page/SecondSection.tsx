
import DesktopOnly from "./DesktopOnly"
import Offers from "./Offers"





const SecondSection = () => {
    return (
        <div className="flex flex-col gap-[4rem] py-0 px-4 lg:py-[4rem] !max-h-fit">
            <DesktopOnly />
            <Offers />
        </div>
    )
}

export default SecondSection