import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Userupdate from '../UserUpdate/Userupdate';


const Profile = () => {
    const [abouts, setAbouts] = useState([])

    useEffect(() => {
        fetch(`https://facebook-sites-server.vercel.app/about`)
            .then(res => res.json())
            .then(data => setAbouts(data))
    }, []);

    const { user } = useContext(AuthContext);


    return (
        <div className="min-h-screen bg-cover" style={{ backgroundImage: `url("https://i.pinimg.com/originals/2d/84/18/2d84187f1fa6c2b2811ac8afd43f5ba5.jpg")`, backgroundRepeat: "no-repeat", backgroundPosition: "fixed", width: "full" }}>
            <div className='text-center py-10'>
                <button className='text-3xl btn w-96 btn-accent text-white text-center'>Profile</button>
            </div>
            <div data-theme="synthwave" className="max-w-xl gap-2  mx-auto   justify-center items-center p-8 sm:flex sm:space-x-6 dark:bg-gray-900 dark:text-gray-100">
                <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                    <img src={user?.photoURL} alt="" className="object-cover   object-center w-full h-full rounded-full dark:bg-gray-500" />
                </div>
                <div className="flex text-white flex-col ">
                    <div>
                        <h2 className='text-xl  font-bold underline'>About</h2>
                    </div>
                    {
                       abouts.map(about =>
                                <div>
                                    <p className="mt-5 md:text-md text-center md:text-left">Name: <small>{user?.displayName ? user?.displayName : 'name is null'}</small> </p>
                                    <p className=" text-center md:text-left">Email: <small>{user?.email ? user?.email : "email is null"}</small> </p>
                                    <p className="  text-center md:text-left ">University: <small>{about?.university}</small> </p>
                                    <p className="  text-center md:text-left">Address: <small>{about?.address}</small> </p>
                                    <label htmlFor="my-modal-3" className="mt-2 btn btn-sm  btn-info text-white shadow-slate-100">Edit</label>
                                </div>
                            )
                        }
                         {
                            abouts.map(aboutus =>
                               <Userupdate 
                               abouteUser={aboutus}>

                               </Userupdate>

                            )
                        }
                </div>
            </div>
        </div>
    );
};

export default Profile;