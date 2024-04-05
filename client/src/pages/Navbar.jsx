import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const links = [
        { text: 'Link 1', href: '#' },
        { text: 'Link 2', href: '#' },
        { text: 'Link 3', href: '#' },
        { text: 'Link 4', href: '#' },
    ];

    return (
        <>
            <nav className="absolute w-full h-24 bg-transparant z-10 p-4 flex justify-between items-center">
                <span className='text-white absolute left-10 top-10'>LOGO</span>
                <div className="absolute right-10 top-10">
                    <button onClick={toggleNavbar} type="button" className="flex flex-col gap-4 items-center justify-center p-2 rounded-m transition duration-150 ease-in-out">
                        <div className={`w-16 h-0.5 bg-white ${isOpen ? 'rotate-45' : ''} transition-all duration-300`}></div>
                        <div className={`w-16 h-0.5 bg-white mt-1 ${isOpen ? '-rotate-45' : ''} transition-all duration-300`}></div>
                    </button>
                </div>
            </nav>
            {
                isOpen &&
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className='absolute w-full bg-gray-500 h-screen flex justify-center items-center flex-col'>
                    {links.map((link, index) => (
                        <motion.a
                            key={index}
                            href={link.href}
                            className="block text-5xl text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 ,type:"spring" }}
                        >
                            {link.text}
                        </motion.a>
                    ))}
                </motion.div>
            }
        </>
    );
};
