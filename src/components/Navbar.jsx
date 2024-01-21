import {useState} from 'react'

import {logo, close, menu} from '../assets'

import { navLinks } from '../constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center sticky'>
      <img src={logo} alt='BITSEvents' className='w-[164px] h-[28px]' />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav,index) => (
          <li key={nav.id} className={`font-['Poppins'] font-normal cursor-pointer text-[18px] ${index === navLinks.length-1 ? `mr-0`: `mr-10`}`}>
            <a href={`/${nav.id}`}>
              {`${nav.name}`}
            </a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close : menu} 
             alt = 'menu' className='h-[28px] w-[28px] object-contain mr-4' 
             onClick={() => setToggle((prev) => !prev)}/>

        <div className={`${toggle ? `flex` : `hidden`} p-6 bg-gradient-to-b from-slate-900 to-gray-700 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>

        <ul className="list-none flex flex-col justify-end items-center flex-1">
          {navLinks.map((nav,index) => (
            <li key={nav.id} className= {`font-poppins font-normal cursor-pointer text-[18px] ${index === navLinks.length-1 ? `mr-0`: `mb-4`}`}>
              <a href={`/${nav.id}`}>
                {`${nav.name}`}
              </a>
          </li>
        ))}
      </ul>

        </div>

      </div>
    </nav>
  )
}

export default Navbar