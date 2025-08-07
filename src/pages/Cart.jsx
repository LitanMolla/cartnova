import productImg from '../assets/images/product1.png'
import Container from '../components/Container'
import { Link } from 'react-router'
import { IoClose } from 'react-icons/io5'
import Btn from '../components/Btn'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { decreaseQuantity, increaseQuantity, removecartitem } from '../slices/adToCartSlice'

const Cart = () => {
    let data = useSelector((state) => state.adtocart.value)
    // console.log(data);
    let dispatch = useDispatch()
    let [totalPrice, setTotalPrice] = useState(0)
    useEffect(() => {
        let total = 0;
        data.map((item) => {
            total += item.price * item.quantity
        })
        setTotalPrice(total)
    }, [data])
    return (
        <>
            <section className='py-10 md:py-20'>
                <Container>
                    <div className="">
                        <h2 className='text-5xl font-bold mb-3'>Cart</h2>
                        <p className='text-xs text-dark'><Link className='duration-300 hover:text-main hover:font-bold' to='/'>Home</Link>  &gt;  <Link className='duration-300 hover:text-main hover:font-bold' to={'/cart'}>Cart</Link></p>
                    </div>
                    <div className="overflow-auto mt-12">
                        <table className='border-collapse w-full text-left'>
                            <thead className='border border-light'>
                                <tr>
                                    <th className='bg-light p-5'>Product</th>
                                    <th className='bg-light p-5'>Price</th>
                                    <th className='bg-light p-5'>Quantity</th>
                                    <th className='bg-light p-5'>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody className='border border-light'>
                                {
                                    data.map((item) => (
                                        <tr>
                                            <td className='md:p-5 p-3 border border-light'>
                                                <div className="flex items-center gap-3 flex-col md:flex-row">
                                                    <button onClick={() => { dispatch(removecartitem(item)) }} className='cursor-pointer'><IoClose /></button>
                                                    <img className='w-15 md:w-25' src={item.image} alt={item.title} />
                                                    <h4 className='text-lg font-bold'>{item.title}</h4>
                                                </div>
                                            </td>
                                            <td className='text-base md:text-xl font-bold p-5 border border-light'>${item.price.toFixed(2)}</td>
                                            <td className='p-3 md:p-5 border border-light'>
                                                <div className="border border-light inline-block px-5 py-1">
                                                    <div className="flex gap-5 flex-col md:flex-row">
                                                        <button onClick={() => { dispatch(decreaseQuantity(item)) }} className='cursor-pointer'>-</button>
                                                        <button>{item.quantity}</button>
                                                        <button onClick={() => { dispatch(increaseQuantity(item)) }} className='cursor-pointer'>+</button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='md:text-xl text-base font-bold p-3 md:p-5 border border-light'>${(item.price * item.quantity).toFixed(2)}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-6">
                        <h5 className='text-xl font-bold text-center md:text-right mb-6'>Cart totals</h5>
                        <div className="max-w-[640px] border border-light border-collapse ml-auto">
                            <div className="flex">
                                <h5 className='flex-1 p-2 border border-light font-bold'>Subtotal</h5>
                                <h5 className='flex-1 p-2 border border-light text-dark'>${totalPrice.toFixed(2)}</h5>
                            </div>
                            <div className="flex">
                                <h5 className='flex-1 p-2 border border-light font-bold'>Total</h5>
                                <h5 className='flex-1 p-2 border border-light '>${totalPrice.toFixed(2)}</h5>
                            </div>
                        </div>
                        <div className="md:text-end mt-6 text-center">
                            <Btn text='Proceed to Checkout' className='inline-block' />
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Cart