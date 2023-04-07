import React, { useState } from 'react';
import { BoltIcon, Bars3Icon, XMarkIcon  } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [isOpen , setIsOpen] = useState(false);

    return (
        <div className='bg-gray-100 px-4 py-5 mx-auto sm:mb-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className='flex items-center justify-between'>
            <Link to='/' className='inline-flex gap-3 font-bold text-3xl'>
                <BoltIcon className='w-6 h- text-blue-600'></BoltIcon>
                <span>NextPages</span>
            </Link>
            <ul className='items-center hidden space-x-10 lg:flex'>
                <li>
                    <NavLink to='/' className={({isActive}) => (isActive ? 'active' : 'default')}
                    >
                        Home

                    </NavLink>
                    <NavLink to='/books' className={({isActive}) => (isActive ? 'active' : 'default')}
                    >
                        Books

                    </NavLink>
                    <NavLink to='/about' className={({isActive}) => (isActive ? 'active' : 'default')}
                    >
                        About Us

                    </NavLink>
                </li>
            </ul>
            <div className='lg:hidden'>
                <button
                    aria-label ='Open Menu'
                    title = 'Open Menu'
                    onClick={() => setIsOpen(true)}
                > 
                <Bars3Icon className='w-5 text-gray-600'></Bars3Icon>
                </button>
                {isOpen && (
                    <div className='absolute top-0 left-0 w-full z-10'>
                        <div className='p-5 bg-white border rounded-sm'>
                            <div className='flex items-end justify-between mb-4'>
                                <div>
                                    <Link to='/' className='inline-flex items-center'>
                                        <BoltIcon className='h-6 w-6 text-blue-500'></BoltIcon>
                                        <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>nextPage</span>
                                    </Link>
                                </div>
                                <button
                                aria-label ='Close Menu' title='Close Menu'
                                onClick={() => setIsOpen(false)}
                                >
                                    <XMarkIcon className='w-5 text-gray-600'></XMarkIcon>
                                </button>
                            </div>
                        </div>
                        <nav>
                            <ul className='space-y-4'>
                                <li>
                                    <Link to='/' className='default'>Home</Link>
                                </li>
                                <li>
                                    <Link to = '/books' className='font-medium tracking-wide text-gray-700 transition-colors duration-500'
                                    >
                                        Books
                                    </Link>
                                </li>
                                <li>
                                    <Link to = '/about' className='font-medium tracking-wide text-gray-700 transition-colors duration-500'
                                    >
                                        About Us
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                )}
            </div>
        </div>
        </div>
    );
};

export default Header;