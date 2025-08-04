import poster4 from "../../assets/images/poster4.png"
import Container from '../Container'

const Poster2 = () => {
  return (
    <>
        <section className='py-10 md:py-20'>
            <Container>
                <img className='w-full' src={poster4} alt="Poster" />
            </Container>
        </section>
    </>
  )
}

export default Poster2