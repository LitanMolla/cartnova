import React from 'react'
import Container from '../Container'
import { RiNumber2 } from 'react-icons/ri'
import { FaArrowRotateLeft, FaTruck } from 'react-icons/fa6'

const Feature = () => {
    return (
        <>
            <section>
                <div className="py-6 shadow shadow-gray-300">
                    <Container>
                        <div className="flex justify-between items-center md:flex-row flex-col gap-3">
                            <div className="flex items-center gap-2">
                                <RiNumber2 className='text-2xl font-bold ' />
                                <p className='text-base text-[#6D6D6D]'>Two years warranty</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaTruck className='text-2xl font-bold ' />
                                <p className='text-base text-[#6D6D6D]'>Free shipping</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaArrowRotateLeft className='text-2xl font-bold ' />
                                <p className='text-base text-[#6D6D6D]'>Return policy in 30 days</p>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default Feature