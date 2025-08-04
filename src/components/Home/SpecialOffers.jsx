import product1 from '../../assets/images/product1.png'
import Container from '../Container'
import Product from '../Product'

const SpecialOffers = () => {
  return (
    <>
        <section>
                <div className="">
                    <Container>
                        <h2 className='text-[39px] font-bold mb-12'>Special Offers</h2>
                        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            <Product
                            image={product1}
                            price={'44.00'}
                            title={'Basic Crew Neck Tee'}
                            />
                            <Product
                            image={product1}
                            price={'44.00'}
                            title={'Basic Crew Neck Tee'}
                            />
                            <Product
                            image={product1}
                            price={'44.00'}
                            title={'Basic Crew Neck Tee'}
                            />
                            <Product
                            image={product1}
                            price={'44.00'}
                            title={'Basic Crew Neck Tee'}
                            />

                        </div>
                    </Container>
                </div>
            </section>
    </>
  )
}

export default SpecialOffers