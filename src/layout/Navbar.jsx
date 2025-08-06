import { FaBars, FaCaretDown, FaSearch, FaShoppingCart, FaUser, FaWindowClose } from "react-icons/fa"
import menuicon from "../assets/icons/shop.svg"
import Container from '../components/Container'
import { Link } from 'react-router'
import { useState } from "react"

const Navbar = () => {
  const [isOpen, SetIsOpen] = useState(false)
  return (
    <>
      <header className='md:py-8 py-4'>
        <nav>
          <Container>
            <div className="flex justify-between items-center">
              <Link to={'/'} className='text-2xl font-bold uppercase'>Cartnova</Link>
              <ul className='md:flex hidden gap-8'>
                <li><Link to={'/'} className='text-sm text-dark duration-300 hover:text-main hover:font-bold'>Home</Link></li>
                <li><Link to={'/products'} className='text-sm text-dark duration-300 hover:text-main hover:font-bold'>Shop</Link></li>
                <li><Link to={'/about'} className='text-sm text-dark duration-300 hover:text-main hover:font-bold'>About</Link></li>
                <li><Link to={'/contacts'} className='text-sm text-dark duration-300 hover:text-main hover:font-bold'>Contacts</Link></li>
                <li><Link to={'/journal'} className='text-sm text-dark duration-300 hover:text-main hover:font-bold'>Journal</Link></li>
              </ul>
              <ul className='md:flex gap-5 hidden'>
                <li><Link className='text-sm duration-300 hover:text-main text-main font-bold'>EN</Link></li>
                <li><Link className='text-sm duration-300 hover:text-main text-dark '>BN</Link></li>
              </ul>
              {/* Mobile Menu */}
              <button onClick={() => SetIsOpen(!isOpen)} className="text-2xl cursor-pointer md:hidden">{isOpen ? <FaWindowClose /> : <FaBars />}</button>
            </div>
            <div className={`md:hidden text-center transition-all duration-500 ease-in-out absolute top-16 right-0 w-2/3 z-10 bg-white h-screen ${isOpen ? 'translate-x-0 visible opacity-100' : 'invisible -translate-x-100 opacity-0'}`}>
              <ul className="mt-10">
                <li><Link to={'/'} className='text-sm text-dark duration-300 hover:text-main hover:font-bold'>Home</Link></li>
                <li><Link to={'/products'} className='text-sm text-dark duration-300 hover:text-main hover:font-bold'>Shop</Link></li>
                <li><Link to={'/about'} className='text-sm text-dark duration-300 hover:text-main hover:font-bold'>About</Link></li>
                <li><Link to={'/contacts'} className='text-sm text-dark duration-300 hover:text-main hover:font-bold'>Contacts</Link></li>
                <li><Link to={'/journal'} className='text-sm text-dark duration-300 hover:text-main hover:font-bold'>Journal</Link></li>
              </ul>
            </div>
          </Container>
        </nav>
      </header>
      <section className='md:py-6 bg-light py-3'>
        <Container>
          <div className="flex justify-between items-center gap-5 md:flex-row flex-col">
            <div className="">
              <button className="flex items-center text-sm gap-2 cursor-pointer">
                <img src={menuicon} alt="Menu icon" />
                <span>Shop by Category</span>
              </button>
            </div>
            <div className="max-w-[600px] relative flex-1">
              <input className="bg-white w-full px-5 py-4" type="text" placeholder="Search Products" />
              <FaSearch className="absolute right-5 top-1/2 -translate-y-1/2" />
            </div>
            <div className="flex gap-5">
              <button className="flex gap-1 cursor-pointer"><FaUser /> <FaCaretDown /></button>
              <Link to='cart'><button><FaShoppingCart className="cursor-pointer" /></button></Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Navbar





