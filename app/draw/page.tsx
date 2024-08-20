import Link from "next/link"
import Logo from "../module/Logo"


const Draw = () => {
  return (
    <div className=" w-full h-full flex justify-center items-center">
     <Link href='/' className={`w-[20rem] h-[20rem] flex justify-center items-center px-2 aspect-square rounded-full border-[1rem] shadow-md font-serif italic text-orange-500 text-[10rem] logo`}>
        <span className='z-0 drop-shadow-sm'>A</span> <span className='z-10 -ml-10 drop-shadow-sm'>A</span>
    </Link>
    </div>
  )
}

export default Draw