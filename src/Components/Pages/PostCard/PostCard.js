import React, { useContext, } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const PostCard = ({ post }) => {
    const { description, image, _id, isMenuOpen} = post;
    
    const { user } = useContext(AuthContext);
    return (
        <div className="flex flex-col my-5 bg-white p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
            <div className="flex space-x-4">
                <img alt="" src={user?.photoURL} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                <div className="flex flex-col space-y-1">
                    <Link rel="noopener noreferrer" href="#" className="text-sm font-semibold">{user?.displayName}</Link>
                    <span className="text-xs dark:text-gray-400">4 hours ago</span>
                </div>
            </div>
            <div>
                <img src={image} alt="" className="object-cover rounded-md w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                <p className="text-sm dark:text-gray-400">
                    {
                        description.length > 200 ?
                            <>{description.slice(0, 200) + '...'}  </>
                            :
                            description
                    }
                </p>
            </div>
                <div className="flex justify-between">
                    <button aria-label="Share this post" type="button" className="p-2 flex gap-1 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                        </svg>
                        <h2 className='font-bold'>Like</h2>
                    </button>
                    <button aria-label="Bookmark this post" type="button" className="p-2 gap-1 flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                        </svg>
                        <h2 className='font-semibold'>Comment</h2>
                    </button>
                </div>
                <Link to={`/postdetails/${_id}`} disabled={!isMenuOpen}><button type="button" className="px-8 py-3 text-white bg-blue-700 w-32  font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800">Details</button></Link>
        </div>
    );
};

export default PostCard;