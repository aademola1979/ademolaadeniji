
import Link from 'next/link'
import Nav from './nav'

const Header = () => {
  return (
    <header className='py-[1rem] flex justify-between px-4 sm:px-8 md:px-12 lg:px-16 shadow-md bg-white/80'>
        <Link href='/'>Logo</Link>
        <Nav />
    </header>
  )
}

export default Header