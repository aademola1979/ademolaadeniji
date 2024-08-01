
import Link from "next/link"



const DesktopOnly = () => {
    return (
        <div className=" justify-center items-center show-desktop-only !min-w-full">
            <div className="grid">
                <h1 className="font-bold text-gray-700 text-4xl">Ademola Adeniji</h1>
                <h3 className="text-gray-500 text-2xl font-bold">Web App Developer</h3>
              
            </div>
            <div className="flex pt-[5rem] gap-8">
                <Link href="/git-repos" className="text-lg text-center font-semibold w-[11rem] h-[4rem] flex justify-center items-center rounded-full btn-blue hover:scale-105 transition-all ease-in-out duration-200">Git Repo.</Link>
                <Link href="/my-works" className="text-lg text-center font-semibold w-[11rem] h-[4rem] flex justify-center items-center rounded-full btn-outline hover:scale-105 transition-all ease-in-out duration-200">My Work</Link>
            </div>
        </div>
    )
}

export default DesktopOnly