import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import './Login.css'

const Login = () => {
    const [error, setError] = useState('');
    const { providerLogin, signIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('success')
            })
            .catch(error => console.error(error))
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success("Succes Login")
                form.reset()
                setError('')


                if (user) {
                    navigate(from, { replace: true });

                }

            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
            .finally(() => {
                setLoading(false);
            })
    }
    return (
        <div>
            <section className="min-h-screen bg-cover " style={{ backgroundImage: `url("https://png.pngtree.com/thumb_back/fh260/background/20210205/pngtree-flat-business-login-box-login-page-image_544861.jpg")` }}>
                <div className="flex flex-col min-h-screen bg-black/40">
                    <div className="container flex flex-col justify-center  flex-1 px-6 py-12 mx-auto">
                        <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
                            <h1 className="text-2xl font-medium text-gray-700 dark:text-gray-200">Login form</h1>
                            <form onSubmit={handleSubmit} className="mt-6">
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="email" className="block text-black dark:text-gray-400">Email</label>
                                    <input type="email" name="email" id="email" placeholder="Enter your Email" className="w-full px-4 py-3 bg-black text-white text-bold rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required />
                                </div>
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="password" className="block text-black dark:text-gray-400">Password</label>
                                    <input type="password" name="password" id="password" placeholder="Enter Your Password" className="w-full text-white px-4 py-3 bg-black rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required />
                                </div>
                                <p className='text-red-600'>
                                    {error}
                                </p>
                                <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                                    Login
                                </button>
                                <div>
                                    <p className='text-center pt-2'>If You have dont any acoount? at first register now <Link to='/register' className='text-red-800 underline'>Register form</Link></p>
                                </div>
                                <div className="divider">OR</div>
                                <div>
                                    <button onClick={handleGoogleSignIn} aria-label="Log in with Google" className="p-3 mb-2 flex mx-auto items-center justify-center bg-pink-500 text-white rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                        </svg><p className='m-2'>Login with Gmail</p>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;