import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assests/Meta-Symbol.png'
import { FaBell, FaFacebookMessenger, FaHome, FaSearch } from "react-icons/fa";
import { HiChatAlt, HiUsers, HiVideoCamera } from "react-icons/hi";
import login from '../../../assests/login pic.png'
import './Topbar.css'
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';
import logout from '../../../assests/last.png'

const Topbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.error(error))
    }


    return (
        <nav data-theme="night" className=' sticky top-0 text-white'>
            <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full  lg:max-w-screen-xl md:px-24 lg:px-8 '>
                <div className='relative flex items-center justify-between'>
                    <Link
                        to='/'
                        aria-label='Smart Home'
                        title='Smart Home'
                        className='inline-flex items-center'
                    >
                        <img src={logo} alt="" className='h-10  w-10' />
                        <span className='ml-1 text-xl font-bold tracking-wide '>
                            META
                        </span>
                        <div className="searchbar ml-2">
                            <FaSearch className='searchIcon'></FaSearch>
                            <input
                                placeholder="Search friend or post"
                                className="searchInput"
                            />
                        </div>
                    </Link>
                    <ul className='flex items-center hidden space-x-8 lg:flex'>
                        <li>
                            <Link
                                to='/'
                                aria-label='Home'
                                title='Home'
                                className='font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-blue-500'
                            >
                                <FaHome className='h-7 w-7'></FaHome>

                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/media'
                                aria-label='Media'
                                title='Media'
                                className='font-medium tracking-wide relative transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-blue-500'
                            >
                                <HiVideoCamera className='h-7 w-7'></HiVideoCamera>
                                <span className='iconbedge'>2</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/about'
                                aria-label='Shop'
                                title='Chat'
                                className='font-medium tracking-wide relative transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-blue-500'
                            >
                                <FaFacebookMessenger className='h-7 w-7'></FaFacebookMessenger>
                                <span className='iconbedge'>4</span>

                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/review'
                                aria-label='Shop'
                                title='Timeline'
                                className='font-medium tracking-wide relative  transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-blue-500'
                            >
                                <FaBell className='w-7 h-7'></FaBell>
                                <span className='iconbedge'>7</span>
                            </Link>
                        </li>
                        {
                            !user?.uid ?
                                <li>
                                    <Link
                                        to='/login'
                                        aria-label='About Us'
                                        title='About Us'
                                        className='font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-pink-600'
                                    >
                                        <img src={login} alt="" className='h-8 w-8' />
                                    </Link>
                                </li>
                                :
                                <>
                                    <li>
                                        <Link
                                            to='/login'
                                            onClick={handleLogOut}
                                            aria-label='logOut'
                                            title='logOut'
                                            className='font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-pink-600'
                                        >
                                           <img src={logout} alt="" className='h-8 text-green-400 w-8' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to='/profile'
                                            aria-label='logOut'
                                            title={user?.displayName}
                                            className='font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400'
                                        >
                                            <div className="relative flex-shrink-0">
                                                <span className="absolute bottom-0 right-0 w-4 h-4 dark:bg-green-600 border rounded-full dark:text-gray-100 dark:border-gray-900"></span>
                                                <img src={user.photoURL} alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700" />
                                            </div>
                                        </Link>
                                    </li>
                                </>
                        }

                    </ul>
                    <div className='lg:hidden'>
                        <button
                            aria-label='Open Menu'
                            title='Open Menu'
                            className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                                <path
                                    fill='currentColor'
                                    d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                                />
                                <path
                                    fill='currentColor'
                                    d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                                />
                                <path
                                    fill='currentColor'
                                    d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div data-theme="night" className='absolute top-0 left-0 w-full z-10'>
                                <div className='p-5 border rounded shadow-sm'>
                                    <div className='flex items-center justify-between mb-4'>
                                       
                                        <div>
                                            <button
                                                aria-label='Close Menu'
                                                title='Close Menu'
                                                className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                                                    <path
                                                        fill='currentColor'
                                                        d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className='space-y-4'>
                                            <li>
                                                <Link
                                                    to='/'
                                                    aria-label='Home'
                                                    title='Home'
                                                    className='font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-blue-500'
                                                >
                                                    <FaHome className='h-7 text-white w-7'></FaHome>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to='/media'
                                                    aria-label='Users'
                                                    title='Users'
                                                    className='font-medium tracking-wide relative  transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-blue-500'
                                                >
                                                    <HiUsers className='h-7 text-white w-7'></HiUsers>
                                                    <span className='iconbedge'>2</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to='/about'
                                                    aria-label='Shop'
                                                    title='Chat'
                                                    className='font-medium tracking-wide relative transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-blue-500'
                                                >
                                                    <HiChatAlt className='h-7 text-white w-7 '></HiChatAlt>
                                                    <span className='iconbedge'>4</span>

                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to='/review'
                                                    aria-label='Shop'
                                                    title='Timeline'
                                                    className='font-medium tracking-wide relative  transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-blue-500'
                                                >
                                                    <FaBell className='w-7 text-white h-7'></FaBell>
                                                    <span className='iconbedge'>7</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to='/'
                                                    aria-label='Login'
                                                    title='Login'
                                                    className='font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-blue-500'
                                                >
                                                    <img src={login} alt="" className='h-8 w-8' />
                                                </Link>
                                            </li>
                                            {
                                                !user?.uid ?
                                                    <li>
                                                        <Link
                                                            to='/login'
                                                            aria-label='About Us'
                                                            title='About Us'
                                                            className='font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-pink-600'
                                                        >
                                                            Login
                                                        </Link>
                                                    </li>
                                                    :
                                                    <>
                                                        <li>
                                                            <Link
                                                                to='/login'
                                                                onClick={handleLogOut}
                                                                aria-label='logOut'
                                                                title='logOut'
                                                                className='font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-pink-600'
                                                            >
                                                                <img src={logout} alt="" className='h-8 text-green-400 w-8' />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                to='/profile'
                                                                aria-label='logOut'
                                                                title={user?.displayName}
                                                                className='font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400'
                                                            >
                                                                <div className="relative flex-shrink-0">
                                                                    <span className="absolute bottom-0 right-0 w-4 h-4 dark:bg-green-600 border rounded-full dark:text-gray-100 dark:border-gray-900"></span>
                                                                    <img src={user.photoURL} alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700" />
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    </>
                                            }

                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </nav>
    );
};

export default Topbar;
