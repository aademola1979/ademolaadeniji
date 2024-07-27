import Link from "next/link";

type Item = {
    text:string,
    link:string,
    icon?:string
}
const NavLink = ({item, index, listLength}:{item:Item, index:number, listLength:number}) => {
    const {text, link, icon} = item;

  return (
    <Link href={link} className="flex text-gray-700 gap-2"><span className="hover:bg-slate-100 p-1 rounded">{text}</span>{index + 1 !== listLength && <span>|</span> }</Link>
  )
}

export default NavLink