import React, { useEffect, useState } from 'react';
import PostCard from '../PostCard/PostCard';



const Media = () => {
    const [posts, setposts] = useState([]);

    useEffect(() => {
        fetch('https://facebook-sites-server.vercel.app/postfield')
            .then(res => res.json())
            .then(data => setposts(data))
    }, [])
    return (
        <div  className="min-h-screen bg-cover" style={{ backgroundImage: `url("https://img.freepik.com/premium-vector/beautiful-purple-color-gradient-background_492281-1122.jpg?w=360")`, backgroundRepeat: "no-repeat", backgroundPosition: "fixed", width: "full" }}>
            <div className='text-center text-white'>
                <h2 className='text-4xl  font-bold '>Our All post</h2>
                <p>Now See Your All Post</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 p-10'>
                {
                    posts.map(post => <PostCard key={post._id} post={post}></PostCard>)
                }
            </div>
        </div>
    );
};

export default Media;