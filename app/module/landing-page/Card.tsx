import Image from "next/image"

type cardProp = {
    name: string,
    image: string

}

const Card = ({ tool }: { tool: cardProp }) => {
    const { name, image } = tool
    return (
        <div className="bg-gray-100 rounded-xl shadow-md p-2 snap-start grid w-20">
            <h3 className="text-xs">{name}</h3>
            <button type="button" className="w-12 h-12 flex justify-center">
                <Image src={image} alt={name} width={40} height={40} className="w-full h-full" />
            </button>
        </div>

    )
}

export default Card