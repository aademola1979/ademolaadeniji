import React from 'react'
import NavLink from './NavLink'

const Nav = () => {
    const navItmes = [
        {
        text:"Home",
        link:"/",
        icon:""
    },

    {
        text:"Contact",
        link:"/contact",
        icon:""
    },

    {
        text:"My Works",
        link:"/my-works",
        icon:""
    },

    {
        text:"Git Repo",
        link:"/git-repos",
        icon:""
    }
]

const listLength = navItmes.length;

  return (
    <nav className='hidden lg:block'>
        <ul className=''>
           <li className='flex gap-4 justify-between'>
            {
                navItmes.map((item, i)=>(
                    <NavLink key={i} index={i} item={item} listLength={listLength}/>
                ))
            }
           </li>

        </ul>
    </nav>
  )
}

export default Nav