import React from 'react'
import { IoIosArrowDropright } from 'react-icons/io';

const Next = ({ onClick }) => {
    return (
        <div onClick={onClick} className='absolute top-1/2 right-3 -translate-y-1/2 z-10'>
            <IoIosArrowDropright className='text-3xl cursor-pointer text-dark' />
        </div>
    );
}

export default Next