import React from 'react';
import Leftside from '../Leftside/Lefside';

import Midleside from '../Mildeside/Midleside';
import RightSide from '../RightSide/RightSide';


const MainFrame = () => {
    return (
        <div className="min-h-screen bg-cover text-white" style={{ backgroundImage: `url("https://getwallpapers.com/wallpaper/full/f/6/c/646603.jpg")`, backgroundRepeat:"no-repeat", backgroundPosition:"fixed", width:"full"}}>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
                <Leftside></Leftside>
                <Midleside></Midleside>
                <RightSide></RightSide>
            </div>
        </div>
    );
};

export default MainFrame;