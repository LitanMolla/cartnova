import Container from '../components/Container'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import Btn from '../components/Btn'
import { Link } from 'react-router'

const NotFound = () => {
    return (
        <>
            <section className='py-10 md:py-20 text-center md:text-left'>
                <Container>
                    <h2 className='text-9xl font-bold'>404</h2>
                    <p className='text-dark text-base max-w-[644px]'>The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?</p>
                    <div className="max-w-[644px] relative my-5 md:my-10">
                        <input className='w-full p-5 border border-[#F0F0F0]' type="text" placeholder='Type to search' />
                        <FaMagnifyingGlass className='absolute top-1/2 -translate-y-1/2 right-5 cursor-pointer' />
                    </div>
                    <Link to='/'><Btn text='Back to Home'/></Link>
                </Container>
            </section>
        </>
    )
}

export default NotFound