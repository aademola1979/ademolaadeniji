
import Link from "next/link"



const DesktopOnly = () => {
    return (
        <div className=" justify-center items-center show-desktop-only !min-w-full">
            <div className="grid ">
                <h1 className="font-bold font-serif text-black/90 text-4xl">Ademola Adeniji</h1>
                <h3 className="text-black/70 font-serif text-2xl font-semibold">Software Developer</h3>
              
            </div>
            <div className="flex pt-[5rem] gap-8">
                <Link href="/about" className="text-lg cursor-pointer text-center font-semibold w-[11rem] h-[4rem] flex justify-center items-center rounded-full btn-blue hover:scale-105 transition-all ease-in-out duration-200">About Me</Link>
                <Link href="/my-works" className="text-lg cursor-pointer text-center font-semibold w-[11rem] h-[4rem] flex justify-center items-center rounded-full btn-outline hover:scale-105 transition-all ease-in-out duration-200">My Works</Link>
            </div>
        </div>
    )
}

export default DesktopOnly