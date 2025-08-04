import { Link } from 'react-router'
import Container from '../components/Container'
import Btn from '../components/Btn'

const Login = () => {
    return (
        <>
            <section className='py-10 md:py-20'>
                <Container>
                    <h2 className='text-5xl font-bold mb-3'>Login</h2>
                    <p className='text-xs text-dark'><Link className='duration-300 hover:text-main hover:font-bold' to='/'>Home</Link>  &gt;  <Link className='duration-300 hover:text-main hover:font-bold' to={'/login'}>Login</Link></p>
                    <p className='max-w-[644px] text-base text-dark my-10 md:my-15'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                    <hr className='text-[#F0F0F0]' />
                    <h3 className='text-3xl md:text-[39px] font-bold mt-10 md:mt-15'>Returning Customer</h3>
                    <form action="">
                        <div className="max-w-[1050px] my-5 md:my-10">
                            <div className="md:flex w-full gap-10">
                                <div className='w-full'>
                                    <label className='text-base font-bold'>Email address</label>
                                    <input className='block outline-0 py-4 border-b border-[#F0F0F0] w-full' type="email" placeholder='company@domain.com' />
                                </div>
                                <div className='w-full'>
                                    <label className='text-base font-bold'>Password</label>
                                    <input className='block outline-0 py-4 border-b border-[#F0F0F0] w-full' type="password" placeholder='*********' />
                                </div>
                            </div>
                        </div>
                        <Btn text='Log in' />
                        <hr className='text-[#F0F0F0] my-5 md:my-10' />
                        <h3 className='text-3xl md:text-[39px] font-bold'>New Customer</h3>
                        <p className='max-w-[644px] my-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                        <Link to={'/signup'}><Btn text={'Register'} /></Link>
                    </form>
                </Container>
            </section>
        </>
    )
}

export default Login