import React from 'react'
import { IoIosArrowDropleft } from 'react-icons/io';

const Prev = ({ onClick }) => {
    return (
        <div onClick={onClick} className='absolute top-1/2 left-3 -translate-y-1/2 z-10'>
            <IoIosArrowDropleft className='text-3xl cursor-pointer text-dark' />
        </div>
    );
}

export default Prev