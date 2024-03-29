import React, {useState} from 'react'
import Link from 'next/link'
import { NAV_LINKS } from '@/constants'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import Image from 'next/image';
import menu from '../public/menu.svg'
import MobileBody from './MobileBody';
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const handleToggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };
  return (
    <nav className='flex justify-between padding-container relative bg-[#191919] shadow py-5'>
        <Link href='/' className=''>
            <span className='text-[#FF3B1D] font-dancing-700 text-2xl'>Dev</span> <span className='font-robot-500 text-white'>Space</span>
        </Link>
        <ul className='hidden h-full gap-12 lg:flex'>
            {NAV_LINKS.map((link) => (
                <Link
                href={link.href}
                key={link.key}
                className='text-white font-robot-700 transition-all cursor-pointer group relative'
            >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-transparent group-hover:bg-[#FF3B1D] transition-all duration-300 mt-2"></span>
            </Link>
            ))}
        </ul>

        <div className='hidden lg:flex gap-1'>
            <div  className='flex gap-2 items-center'>
                <FaInstagram className='text-white text-[18px] cursor-pointer' />
                <CiFacebook className='text-white text-[18px] cursor-pointer' />
                <CiTwitter className='text-white text-[18px] cursor-pointer' />
            </div>
            <button className='
                bg-[#FF3B1D] 
                text-white 
                rounded-md 
                px-5 
                py-2 
                font-bold 
                hover:bg-[#FF3B1D] 
                hover:text-black 
                transition-all
                
            '>Let&apos;s talk</button>

        </div>

        <MdOutlineMenu onClick={handleToggleMobileNav} className='text-white text-[30px] lg:hidden cursor-pointer' />

        <MobileBody isMobileNavOpen={isMobileNavOpen} onToggleNav={handleToggleMobileNav} />

    </nav>
  )
}

export default Navbar