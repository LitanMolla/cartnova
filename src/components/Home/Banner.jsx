import { Link } from "react-scroll"
import banner1 from "../../assets/images/banner1.webp"
import banner2 from "../../assets/images/banner2.webp"
import banner3 from "../../assets/images/banner3.webp"
import banner4 from "../../assets/images/banner4.webp"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 6000,
  };
  return (
    <>
      <section className="overflow-hidden">
        <Slider {...settings}>
          <Link className="block cursor-pointer"><img className="w-full" src={banner1} alt="Banner Image" /></Link>
          <Link className="block cursor-pointer"><img className="w-full" src={banner2} alt="Banner Image" /></Link>
          <Link className="block cursor-pointer"><img className="w-full" src={banner3} alt="Banner Image" /></Link>
          <Link className="block cursor-pointer"><img className="w-full" src={banner4} alt="Banner Image" /></Link>
        </Slider>
      </section>
    </>
  )
}

export default Banner