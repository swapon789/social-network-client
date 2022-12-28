import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';


const Profile = () => {
    const { user } = useContext(AuthContext);


    return (
        <div  className="min-h-screen bg-cover" style={{ backgroundImage: `url("https://i.pinimg.com/originals/2d/84/18/2d84187f1fa6c2b2811ac8afd43f5ba5.jpg")`, backgroundRepeat:"no-repeat", backgroundPosition:"fixed", width:"full"}}>
            <div className='text-center pt-20 pb-5'>
                <button className="btn text-black bg-white t w-96 ">Profile</button>
            </div>
            <div data-theme="synthwave" className="max-w-5xl  py-20 flex justify-evenly text-white px-20 mx-auto sm:flex sm:space-x-6 dark:bg-gray-900 dark:text-gray-100">
                <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                    <img src={user?.photoURL} alt="" className="object-cover object-center rounded-full w-full h-full  dark:bg-gray-500" />
                </div>
                <div className="flex flex-col space-y-4">
                    <div>
                        <h2 className='text-2xl font-bold underline'>About</h2>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold"> Name: {user?.displayName}</h2>
                        <span className="text-sm dark:text-gray-400">Email: {user?.email}</span>
                    </div>
                    <div className="space-y-1">
                        <span className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                            </svg>
                            <span className="dark:text-gray-400">University : Dhaka InterNational Universiy</span>
                        </span>
                        <span className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                            <span className="dark:text-gray-400">Address: Banani,Dhaka, Bangladesh</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;