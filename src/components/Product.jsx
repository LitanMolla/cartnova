import React from 'react'
import { FaCartPlus, FaHeart } from 'react-icons/fa'
import { FaRotate } from 'react-icons/fa6'
import { useDispatch } from 'react-redux'
import { addtocart } from '../slices/adToCartSlice'

const Product = ({ image, price, title, id, alt }) => {
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
            <div className="w-full border border-gray-100 group">
                <div className="">
                    <img className='w-full' src={image} alt={alt} />
                </div>
                <div className="flex justify-between py-6 items-center px-1">
                    <h4 className="text-xl font-bold truncate max-w-[250px] overflow-hidden whitespace-nowrap"> {title} </h4>
                    <p className='text-base text-[#767676]'>${price}</p>
                </div>
                <div className="w-full bg-white  flex justify-between items-end">
                    <button onClick={handleAddtocart} className='text-base text-white items-center gap-2 cursor-pointer duration-300 bg-main block w-full font-medium py-2.5 hover:bg-dark'>Add to Cart</button>
                </div>

            </div>
        </>
    )
}

export default Product