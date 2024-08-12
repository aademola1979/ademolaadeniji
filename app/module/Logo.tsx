import Link from "next/link"


const Logo = ({className}:{className:string}) => {
  return (
    <Link href='/' className={`${className} px-2 aspect-square rounded-full border-4 shadow-md font-serif italic text-orange-500 text-lg logo`}>
        <span className='z-0 drop-shadow-sm'>A</span> <span className='z-10 -ml-2 drop-shadow-sm'>A</span>
    </Link>
  )
}

export default Logo