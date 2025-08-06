import { useEffect, useState } from 'react'
import product1 from '../../assets/images/product1.png'
import Container from '../Container'
import Product from '../Product'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Next from '../slider/Next';
import Prev from '../slider/Prev';

const NewArrivals = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then((productsData) => setData(productsData.products))
    }, [])

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <Next />,
        prevArrow: <Prev />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <section>
                <div className="">
                    <Container>
                        <h2 className='text-[39px] font-bold mb-12'>New Arrivals</h2>

                        <div className="-mx-2">
                            <Slider {...settings}>
                                {
                                    data.map((item, index) => (
                                        <div className="px-2" key={index}>
                                            <Product
                                                image={item.images[0]}
                                                price={item.price}
                                                title={item.title}
                                                id={item.id}
                                                alt={item.title}
                                            />
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default NewArrivals