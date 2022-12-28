import React from 'react';
import Leftside from '../LeftSide/Leftside';
import Midleside from '../Mildeside/Midleside';
import RightSide from '../RightSide/RightSide';


const MainFrame = () => {
    return (
        <div className='grid bg-gray-200 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
            <Leftside></Leftside>
            <Midleside></Midleside>
            <RightSide></RightSide>
        </div>
    );
};

export default MainFrame;