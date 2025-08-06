import { Link } from 'react-router'
import Container from '../components/Container'
import Pagination from '../components/Pagination'

const Products = () => {
    return (
        <>
            <section className='py-10 md:py-20'>
                <Container>
                    <h2 className='text-5xl font-bold mb-3'>Products</h2>
                    <p className='text-xs text-dark'><Link className='duration-300 hover:text-main hover:font-bold' to='/'>Home</Link>  &gt;  <Link className='duration-300 hover:text-main hover:font-bold' to={'/products'}>Products</Link></p>
                    <div className="mt-10 md:mt-20">
                        <div className="flex gap-10">
                            <div className="w-90 hidden lg:block">
                                <h4 className='text-xl font-bold mb-8'>Shop by Category</h4>
                                <ul>
                                    <li> <Link className='text-dark border-b border-[#F0F0F0] py-3 block'>Category 1</Link> </li>
                                    <li> <Link className='text-dark border-b border-[#F0F0F0] py-3 block'>Category 2</Link> </li>
                                    <li> <Link className='text-dark border-b border-[#F0F0F0] py-3 block'>Category 3</Link> </li>
                                    <li> <Link className='text-dark border-b border-[#F0F0F0] py-3 block'>Category 4</Link> </li>
                                    <li> <Link className='text-dark border-b border-[#F0F0F0] py-3 block'>Category 5</Link> </li>
                                </ul>
                                <h4 className='text-xl font-bold mb-y'>Shop by Brand</h4>
                                <ul>
                                    <li> <Link className='text-dark border-b border-[#F0F0F0] py-3 block'>Brand 1</Link> </li>
                                    <li> <Link className='text-dark border-b border-[#F0F0F0] py-3 block'>Brand 2</Link> </li>
                                    <li> <Link className='text-dark border-b border-[#F0F0F0] py-3 block'>Brand 3</Link> </li>
                                    <li> <Link className='text-dark border-b border-[#F0F0F0] py-3 block'>Brand 4</Link> </li>
                                    <li> <Link className='text-dark border-b border-[#F0F0F0] py-3 block'>Brand 5</Link> </li>
                                </ul>
                                <h4 className='text-xl font-bold my-8'>Shop by Price</h4>
                                <ul>
                                    <li> <Link className='text-dark border-b border-[#F0F0F0] py-3 block'>$0.00 - $9.99</Link> </li>
                                    <li> <Link className='text-dark border-b border-[#F0F0F0] py-3 block'>$10.00 - $19.99</Link> </li>
                                    <li> <Link className='text-dark border-b border-[#F0F0F0] py-3 block'>$20.00 - $29.99</Link> </li>
                                    <li> <Link className='text-dark border-b border-[#F0F0F0] py-3 block'>$30.00 - $39.99</Link> </li>
                                    <li> <Link className='text-dark border-b border-[#F0F0F0] py-3 block'>$40.00 - $69.99</Link> </li>
                                </ul>
                            </div>
                            <div className="flex-1">
                                <div className="flex gap-6 justify-end mb-6">
                                    <div className="flex text-dark text-base gap-2 items-center">
                                        <p>Sort by:</p>
                                        <select className='border border-dark px-2 py-1'>
                                            <option value="featured">Featured</option>
                                        </select>
                                    </div>
                                    <div className="flex text-dark text-base gap-2 items-center">
                                        <p>Show:</p>
                                        <select className='border border-dark px-2 py-1'>
                                            <option value="36">36</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="">
                                    <Pagination
                                        itemsPerPage={9}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Products