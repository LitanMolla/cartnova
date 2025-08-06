import productImg from '../assets/images/product1.png'
import Container from '../components/Container'
import { Link } from 'react-router'
import { IoClose } from 'react-icons/io5'
import Btn from '../components/Btn'

const Cart = () => {
    return (
        <>
            <section className='py-10 md:py-20'>
                <Container>
                    <div className="">
                        <h2 className='text-5xl font-bold mb-3'>Cart</h2>
                        <p className='text-xs text-dark'><Link className='duration-300 hover:text-main hover:font-bold' to='/'>Home</Link>  &gt;  <Link className='duration-300 hover:text-main hover:font-bold' to={'/cart'}>Cart</Link></p>
                    </div>
                    <div className="overflow-auto">
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
                                <tr>
                                    <td className='p-5 border border-light'>
                                        <div className="flex items-center gap-3 flex-col md:flex-row">
                                            <button className='cursor-pointer'><IoClose /></button>
                                            <img className='w-25' src={productImg} alt="dfg" />
                                            <h4 className='text-lg font-bold'>Product name</h4>
                                        </div>
                                    </td>
                                    <td className='text-xl font-bold p-5 border border-light'>$44.00</td>
                                    <td className='p-5 border border-light'>
                                        <div className="border border-light inline-block px-5 py-1">
                                            <div className="flex gap-5 flex-col md:flex-row">
                                                <button className='cursor-pointer'>-</button>
                                                <button>1</button>
                                                <button className='cursor-pointer'>+</button>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-xl font-bold p-5 border border-light'>$44.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-6">
                        <h5 className='text-xl font-bold text-center md:text-right mb-6'>Cart totals</h5>
                        <div className="max-w-[640px] border border-light border-collapse ml-auto">
                            <div className="flex">
                                <h5 className='flex-1 p-2 border border-light font-bold'>Subtotal</h5>
                                <h5 className='flex-1 p-2 border border-light text-dark'>389.99 $</h5>
                            </div>
                            <div className="flex">
                                <h5 className='flex-1 p-2 border border-light font-bold'>Total</h5>
                                <h5 className='flex-1 p-2 border border-light '>389.99 $</h5>
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