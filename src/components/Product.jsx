import React from 'react'
import { FaCartPlus, FaHeart } from 'react-icons/fa'
import { FaRotate } from 'react-icons/fa6'
import { useDispatch } from 'react-redux'
import { addtocart } from '../slices/adToCartSlice'

const Product = ({ image, price, title, id,alt }) => {
    let dispatch = useDispatch()
    function handleAddtocart() {
        dispatch(addtocart({
            id: id,
            image: image,
            title: alt,
            price: price,
            alt: alt,
            quantity: 1
        }))
    }
    return (
        <>
            <div className="w-full border border-gray-200 group">
                <div className="relative">
                    <img className='w-full' src={image} alt={alt} />
                    <div className="absolute left-0 bottom-0 w-full bg-white p-5 group-hover:opacity-100 duration-500 flex justify-end flex-col items-end gap-2 border-y border-gray-300 opacity-0">
                        <button className='text-base text-[#767676] flex items-center gap-2 cursor-pointer duration-300 hover:font-bold hover:text-main'>Add to Wish List <FaHeart className='text-main' /></button>
                        <button className='text-base text-[#767676] flex items-center gap-2 cursor-pointer duration-300 hover:font-bold hover:text-main'>Compare <FaRotate className='text-main' /></button>
                        <button onClick={handleAddtocart} className='text-base text-[#767676] flex items-center gap-2 cursor-pointer duration-300 hover:font-bold hover:text-main'>Add to Cart <FaCartPlus className='text-main' /></button>
                    </div>
                </div>
                <div className="flex justify-between px-1 py-6 items-center">
                    <h4 className="text-xl font-bold truncate max-w-[250px] overflow-hidden whitespace-nowrap"> {title} </h4>
                    <p className='text-base text-[#767676]'>${price}</p>
                </div>
            </div>
        </>
    )
}

export default Product