import { useState } from 'react'
import { navLinks } from '../constants';
import {  menu, rrdev_logo } from '../assets'; 
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return (

    <nav className="w-full flex py-6 justify-between items-center navbar">
          <div className="absolute z-[0] w-[60%] h-[60%] -top-[50%] rounded-full blue__gradient" /> 

      <Link to={'/'} >
        <img src={rrdev_logo} alt='rregalado' className='w-[110px] h-[100px] bg-blue-gradient p-[2px] cursor-pointer' />
      </Link>/
    
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={ nav.id }
            className={ `font-poppins
            font-normal
            cursor-pointer
            text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}
            text-white`}
          >
          <Link to={nav.id}>
            {nav.title}
          </Link>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={ toggle ? close : menu} 
          alt="menu"
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />
        <div 
          className={`${toggle ? 'flex' : 'hidden'} 
            p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
        <ul className='list-none flex flex-col justify-end items-center flex-1'>
          {navLinks.map((nav, index) => (
            <li
              key={ nav.id }
              className={ `font-poppins
              font-normal
              cursor-pointer
              text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}
              text-white`}
            >
              <a href={`#${nav.id}`}> {nav.title} </a>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar