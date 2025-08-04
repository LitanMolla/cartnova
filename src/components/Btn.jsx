import React from 'react'

const Btn = ({ text, className = 'inline-block', }) => {
    return (
        <button className={`${className} text-white text-sm font-bold py-4 px-12 bg-main cursor-pointer duration-300 hover:bg-main/80`}>{text}</button>
    )
}

export default Btn