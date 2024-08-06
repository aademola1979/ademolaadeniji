
import SocialMedia from '../landing-page/SocialMedia'
import Logo from '../Logo'
import MobileNav from '../mobile-nav'
import MainNav from './MainNav'


const Header = () => {
  return (
    <header className='py-[0.5rem] w-full items-center  z-40 flex justify-between px-8 md:px-12 lg:px-16'>
        <Logo className="py-1"/>
        
        <MainNav />
        
        <MobileNav/>
        <div className='hidden lg:block'>
        <SocialMedia />

        </div>
        
    </header>
  )
}

export default Header