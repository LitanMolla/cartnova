import poster1 from "../../assets/images/poster1.png"
import poster2 from "../../assets/images/poster2.png"
import poster3 from "../../assets/images/poster3.png"
import Container from '../Container'
import { Link } from 'react-scroll'

const Poster = () => {
    return (
        <>
            <section>
                <div className="md:py-20 py-10 ">
                    <Container>
                        <div className="md:flex gap-5 space-y-5">
                            <div className="">
                                <Link className='w-full cursor-pointer'><img className='w-full' src={poster1} alt="Poster" /></Link>
                            </div>
                            <div className="space-y-5">
                                <div className=""> <Link className='w-full cursor-pointer'><img className='w-full' src={poster2} alt="Poster" /></Link></div>
                                <div className=""> <Link className='w-full cursor-pointer'><img className='w-full' src={poster3} alt="Poster" /></Link></div>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default Poster