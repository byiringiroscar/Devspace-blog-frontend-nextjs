import React from 'react'
import PropTypes from 'prop-types';
import styles from './mobilebody.module.css'
import { IoClose } from "react-icons/io5";
import Link from 'next/link';
import { NAV_LINKS } from '@/constants' 
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


type ToggleType = {
    isMobileNavOpen?: boolean; // Replace 'any' with the actual type
    onToggleNav?: any; // Replace 'any' with the actual type
  };
  


const MobileBody = ({ isMobileNavOpen, onToggleNav }: ToggleType) => {
  return (
    <div className={`fixed ${styles.container} lg:hidden w-[65vw] h-screen bg-[#191919] z-[99] transition-all duration-[1s] ${isMobileNavOpen ? 'right-0' : '-right-full'} top-0`}>
        <div className={styles.close} onClick={onToggleNav}>
            <IoClose className='text-white text-[50px]' />
        </div>
        <div className={styles.wrapper}>
        <Link href='/' className=''>
            <span className='text-[#FF3B1D] font-dancing-700 text-2xl'>Dev</span> <span className='font-robot-500 text-white'>Space</span>
        </Link>
            <ul className='gap-4 flex flex-col'>
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

        <div className='flex gap-5'>
        <div className='cursor-pointer' style={{ color: 'white' }}>
                <FaFacebook className='text-[25px]' />
            </div>
            <div className='cursor-pointer' style={{ color: 'white' }}>
                <FaInstagramSquare className='text-[25px]' />
            </div>
            <div className='cursor-pointer' style={{ color: 'white' }}>
                <FaTwitter className='text-[25px]' />
            </div>
            <div className='cursor-pointer' style={{ color: 'white' }}>
                <FaYoutube className='text-[25px]' />
            </div>
        </div>

        </div>
    </div>
  )
}

export default MobileBody