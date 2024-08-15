
import Link from 'next/link'
import SocialMedia from '../landing-page/SocialMedia'
import Logo from '../Logo'
import MobileNav from '../mobile-nav'
import MainNav from './MainNav'


const Header = () => {
  return (
    <header className='py-[0.5rem] w-full items-center  z-40 flex justify-between px-8 md:px-12 lg:px-16'>
      <div  className='flex justify-center items-center'>
        <Logo className="pt-1 mt-2" />
        <Link href='/' className='rico text-lg flex flex-col items-center justify-center '>
          <p className='ml-4 -mb-2 mt-2 font-mono italic'>Ademola</p>
          <p className='ml-2 font-mono italic'>Adeniji</p>
        </Link>

      </div>


      <MainNav />

      <MobileNav />
      <div className='hidden lg:block'>
        <SocialMedia x='fill-white' />

      </div>

    </header>
  )
}

export default Header