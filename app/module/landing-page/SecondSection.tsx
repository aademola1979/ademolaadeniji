
import DesktopOnly from "./DesktopOnly"
import Offers from "./Offers"





const SecondSection = () => {
    return (
        <div className="grid gap-4 !max-h-fit">
            <DesktopOnly />
            <Offers />
        </div>
    )
}

export default SecondSection