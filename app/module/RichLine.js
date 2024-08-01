import ArrowRight from "./arrow-right"
import Link from "next/link"

const RichLine = ({href, children, className}) => {
  return (
    <div className="flex items-start">
      <Link
        href={href}
        className="flex items-center text-large-regular border-b border-current gap-x-4 py-2 
        transition-all ease-in-out duration-300 group hover:pl-4 hover:pr-1"
      >
        <>
          <span className={`${className} `}>{children}</span>
          <ArrowRight
            size={20}
            className="transition-all group-hover:ml-2 duration-300 pt-1"
          />
        </>
      </Link>
    </div>

  )
}

export default RichLine