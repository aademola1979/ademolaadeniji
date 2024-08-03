
import Logo from '../Logo'
import MobileNav from '../mobile-nav'
import MainNav from './MainNav'


const Header = () => {
  return (
    <header className='py-[0.5rem] w-full items-center flex justify-between px-8 md:px-12 lg:px-16 shadow-md bg-white/80'>
        <Logo className="py-1"/>
        <MobileNav/>
        <MainNav />
    </header>
  )
}

export default Header