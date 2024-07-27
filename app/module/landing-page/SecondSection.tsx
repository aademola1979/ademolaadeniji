import DesktopOnly from "./DesktopOnly"
import Offers from "./Offers"
import SkillSets from "./SkillSets"


const SecondSection = () => {
    return (
        <div className="grid gap-4">
            <DesktopOnly />
            <Offers />
            <SkillSets /> 
        </div>
    )
}

export default SecondSection