import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <>
      <section className='md:mt-20 mt-10 py-15 bg-light'>
        <Container>
          <div className="grid grid-cols-2 md:flex justify-between gap-5">
            <div className="flex-1">
              <h4 className='font-bold text-base mb-2'>MENU</h4>
              <ul className='space-y-1'>
                <li><Link className='text-sm text-[#6D6D6D] cursor-pointer duration-300 hover:text-main hover:font-bold'>Home</Link></li>
                <li><Link className='text-sm text-[#6D6D6D] cursor-pointer duration-300 hover:text-main hover:font-bold'>Shop</Link></li>
                <li><Link className='text-sm text-[#6D6D6D] cursor-pointer duration-300 hover:text-main hover:font-bold'>About</Link></li>
                <li><Link className='text-sm text-[#6D6D6D] cursor-pointer duration-300 hover:text-main hover:font-bold'>Contact</Link></li>
                <li><Link className='text-sm text-[#6D6D6D] cursor-pointer duration-300 hover:text-main hover:font-bold'>Journal</Link></li>
              </ul>
            </div>
            <div className="flex-1">
              <h4 className='font-bold text-base mb-2'>SHOP</h4>
              <ul className='space-y-1'>
                <li><Link className='text-sm text-[#6D6D6D] cursor-pointer duration-300 hover:text-main hover:font-bold'>Home</Link></li>
                <li><Link className='text-sm text-[#6D6D6D] cursor-pointer duration-300 hover:text-main hover:font-bold'>Category 1</Link></li>
                <li><Link className='text-sm text-[#6D6D6D] cursor-pointer duration-300 hover:text-main hover:font-bold'>Category 2</Link></li>
                <li><Link className='text-sm text-[#6D6D6D] cursor-pointer duration-300 hover:text-main hover:font-bold'>Category 3</Link></li>
                <li><Link className='text-sm text-[#6D6D6D] cursor-pointer duration-300 hover:text-main hover:font-bold'>Category 4</Link></li>
              </ul>
            </div>
            <div className="flex-1">
              <h4 className='font-bold text-base mb-2'>HELP</h4>
              <ul className='space-y-1'>
                <li><Link className='text-sm text-[#6D6D6D] cursor-pointer duration-300 hover:text-main hover:font-bold'>Privacy Policy</Link></li>
                <li><Link className='text-sm text-[#6D6D6D] cursor-pointer duration-300 hover:text-main hover:font-bold'>Terms & Conditions</Link></li>
                <li><Link className='text-sm text-[#6D6D6D] cursor-pointer duration-300 hover:text-main hover:font-bold'>Special E-shop</Link></li>
                <li><Link className='text-sm text-[#6D6D6D] cursor-pointer duration-300 hover:text-main hover:font-bold'>Shipping</Link></li>
                <li><Link className='text-sm text-[#6D6D6D] cursor-pointer duration-300 hover:text-main hover:font-bold'>Secure Payments</Link></li>
              </ul>
            </div>
            <div className="flex-2">
              <h4 className='font-bold text-base'>(052) 611-5711</h4>
              <h4 className='font-bold text-base mb-2'>company@domain.com</h4>
              <ul className='space-y-1'>
                <li><Link className='text-sm text-[#6D6D6D] cursor-pointer duration-300 hover:text-main hover:font-bold'>575 Crescent Ave. Quakertown, PA 18951</Link></li>
              </ul>
            </div>
            <div className="flex-1">
              <Link to={'/'} className='text-2xl font-bold uppercase cursor-pointer mt-5 md:mt-0 inline-block'>Cartnova</Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Footer