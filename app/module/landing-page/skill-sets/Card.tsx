import Image from "next/image"

type cardProp = {
    name: string,
    image: string

}

const Card = ({ tool }: { tool: cardProp }) => {
    const { name, image } = tool
    return (
        <div className="grid justify-center bg-gray-100 rounded-xl shadow-xl p-2 gap-1 snap-start !min-w-[6rem]">
            <h3 className="text-xs">{name}</h3>
            <div className="w-12 h-12 flex justify-center">
                <Image src={image} alt={name} width={40} height={40} className="w-full h-full" />
            </div>
        </div>

    )
}

export default Card