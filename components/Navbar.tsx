import React from 'react'
import Link from 'next/link'
import { NAV_LINKS } from '@/constants'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className='flex justify-between padding-container relative bg-[#191919] shadow py-5'>
        <Link href='/' className='font-bold text-[#FF3B1D]'>
            Dev <span>Space</span>
        </Link>
        <ul className='hidden h-full gap-12 lg:flex'>
            {NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key} className='text-white transition-all cursor-pointer'>{link.label}</Link>
            ))}
        </ul>

        <div className='hidden lg:flex gap-1'>
            <div  className='flex'>
                <FaInstagram className='text-white text-2xl' />
                <CiFacebook className='text-white text-2xl' />
                <CiTwitter className='text-white text-2xl' />
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

    </nav>
  )
}

export default Navbar