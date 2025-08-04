import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router'
import Btn from '../components/Btn'

const Contacts = () => {
    return (
        <>
            <section className='py-10 md:py-20'>
                <Container>
                    <h2 className='text-5xl font-bold mb-3'>Contacts</h2>
                    <p className='text-xs text-dark'><Link className='duration-300 hover:text-main hover:font-bold' to='/'>Home</Link>  &gt;  <Link className='duration-300 hover:text-main hover:font-bold' to={'/contacts'}>Contacts</Link></p>
                    <div className="mt-10 md:mt-20 md:max-w-1/2">
                        <h3 className='text-[39px] font-bold mb-5 md:mb-10'>Fill up a Form</h3>
                        <form>
                            <label className='font-bold text-base inline-block pt-6'>Name</label>
                            <input className='block py-4 border-b border-[#F0F0F0] w-full outline-0' type="text" placeholder='Your name here' />
                            <label className='font-bold text-base inline-block pt-6'>Email</label>
                            <input className='block py-4 border-b border-[#F0F0F0] w-full outline-0' type="text" placeholder='Enter Your email here' />
                            <label className='font-bold text-base inline-block pt-6'>Message</label>
                            <textarea className='block py-4 border-b border-[#F0F0F0] w-full outline-0 min-h-[100px]' type="text" placeholder='Enter message here' />
                            <Btn text='Post' className='mt-8 inline-block px-20' />
                        </form>
                    </div>
                    <div className="mt-10 md:mt-20">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.1702543957504!2d90.3800052758969!3d23.74130738912434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sCreative%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1753968377517!5m2!1sen!2sbd" width="100%" height="450" ></iframe>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Contacts