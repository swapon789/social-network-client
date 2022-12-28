import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate, } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';


const Register = () => {
    const [error, setError] = useState("");

    const { creatUser, updateUserProfile, } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/login';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;


        creatUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success("Register Successfull")
                setError('');
                form.reset();
                if (user) {
                    navigate(from, { replace: true });
                }
                handleUpdateUserProfile(name, photoURL);

            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            })
    }
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,

            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }


    return (
        <div>
            <section className="min-h-screen bg-cover " style={{ backgroundImage: `url("https://png.pngtree.com/thumb_back/fh260/background/20210205/pngtree-25d-sense-of-science-and-technology-login-registration-image_544766.jpg")` }}>
                <div className="flex flex-col min-h-screen bg-black/20">
                    <div className="container flex flex-col justify-center  flex-1 px-6 py-12 mx-auto">
                        <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
                            <h1 className="text-2xl font-medium text-gray-700 dark:text-gray-200">Register Form</h1>
                            <form onSubmit={handleSubmit} className="mt-6">
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="name" className="block dark:text-gray-400">Username</label>
                                    <input type="text" name="name" id="name" placeholder="Enter Your Name" className="w-full bg-black px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                                </div>
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="photoURL" className="block dark:text-gray-400">PhotoURL</label>
                                    <input type="text" name="photoURL" id="photoURl" placeholder="Enter Your PhotoURL" className="w-full bg-black px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                                </div>
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="email" className="block dark:text-gray-400">Email</label>
                                    <input type="email" name="email" id="email" placeholder="Enter your Email" className="w-full px-4 bg-black py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                                </div>
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="password" className="block dark:text-gray-400">Password</label>
                                    <input type="password" name="password" id="password" placeholder="Enter Your Password" className="w-full bg-black px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                                </div>
                                <p className='text-red-600'>
                                    {error}
                                </p>
                                <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                                    Register 
                                </button>
                                <div>
                                    <p className='text-center pt-2'>If You create a acoount? Now you are easily login <Link to='/login' className='text-red-800 underline'>Login Form</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;
