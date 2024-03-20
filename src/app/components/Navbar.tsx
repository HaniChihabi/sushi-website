"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MenuOutlined } from '@ant-design/icons';
export default function Navbar() {
    // State for showing or hiding the navbar based on scroll position
    const [show, setShow] = useState(true);

    // State for tracking the last scroll position
    const [lastScrollY, setLastScrollY] = useState(0);
    
    // State to control the visibility of the mobile menu
    const [showMenu, setShowMenu] = useState(false);

    // State to control the background color of the navbar
    const [navbarBg, setNavbarBg] = useState('transparent');

    // Function to control the visibility and background color of the navbar on scroll
    const controlNavbar = () => {
        // Hide navbar and change background to black when scrolling down and past 100px
        if (window.scrollY > lastScrollY && window.scrollY > 5) {
            setNavbarBg('bg-black'); // Set navbar background to black
        } else {
            // Show navbar and change background to transparent when scrolling up or at the top of the page
            setShow(true);
            setNavbarBg(window.scrollY > 100 ? 'bg-black' : 'transparent'); // Keep navbar background black if not at the top
        }
        // Update last scroll position state
        setLastScrollY(window.scrollY);
    };

    // Effect to add and remove the scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY, navbarBg]); // Add navbarBg as a dependency

    // Effect to toggle body overflow based on mobile menu visibility
    useEffect(() => {
        if (showMenu) {
            // Prevent scrolling when mobile menu is open
            document.body.style.overflow = 'hidden';
        } else {
            // Allow scrolling when mobile menu is closed
            document.body.style.overflow = '';
        }
    }, [showMenu]);

    return (
<nav className={`fixed flex z-50 justify-between w-full p-7 transition-opacity duration-500 ${show ? 'opacity-100' : 'opacity-0'} ${navbarBg} navbar-transition`}>
            <Link href="/#">
                    <div className='w-12 h-12 relative bottom-1 ml-6 mt-'>
                        <Image
                            src="/newestsushilogo.png"
                            alt="Sushi Store"
                            width={60}
                            height={60}
                            objectFit="contain"
                            priority
                        />
                    </div>
            </Link>
            <div className='hidden lg:block'>
                <ul className="flex gap-x-10 mr-20 text-l font-light">
                    {/* Navigation links for large screens */}
                    <li className="transition duration-300 ease-in-out hover:bg-orange-600 font-light  py-3 px-5 bg-orange-50 rounded-full text-xl"><Link href="/about">CALL US 1234 12345678</Link></li>
                    <li className="transition duration-300 ease-in-out hover:bg-orange-500 font-light py-3 px-5 bg-orange-50 rounded-full text-xl"><Link href="/about">ORDER ONLINE</Link></li>
                    <li className="hover:text-amber-50 hover:pointer transition-colors text-orange-500 mt-0 text-4xl">
                    <MenuOutlined onClick={() => setShowMenu(!showMenu)} />
                    </li>
                    
                    </ul>
            </div>
            <div className='lg:hidden'>
                {/* Toggle button for mobile menu */}
                <button onClick={() => setShowMenu(!showMenu)} className='bg-transparent hover:bg-sky-500 rounded-full transition-all mr-20'>Menu</button>
            </div>
            {showMenu && (
                <div className='absolute h-screen flex justify-center items-center overflow-hidden top-full right-0 bg-orange-100 w-full p-7'>
                    {/* Navigation links for mobile menu */}
                    <ul className="flex flex-col justify-center items-center text-4xl gap-y-4">
                        <li className="hover:text-gray-600 hover:pointer transition-colors"><Link href="/">Home</Link></li>
                        <li className="hover:text-gray-600 hover:pointer transition-colors"><Link href="/about">About Us</Link></li>
                        <li className="hover:text-gray-600 hover:pointer transition-colors"><Link href="/menu">Menu</Link></li>
                        <li className="hover:text-gray-600 hover:pointer transition-colors"><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
            )}        </nav>
    );
};
