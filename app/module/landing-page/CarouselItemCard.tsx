import {CarouselItem} from "@/components/ui/carousel"
import Card from "./skill-sets/Card"
type propsItem = {
    name:string,
    image:string

}
const CarouselItemCard = ({tool}:{tool:propsItem}) => {
    
  return (
    <CarouselItem className="">
        <Card tool={tool}/>
    </CarouselItem>
  )
}

export default CarouselItemCard