import Banner from '../components/Home/Banner'
import Feature from '../components/Home/Feature'
import NewArrivals from '../components/Home/NewArrivals'
import Poster from '../components/Home/Poster'
import Poster2 from '../components/Home/Poster2'
import SpecialOffers from '../components/Home/SpecialOffers'

const Home = () => {
  return (
    <>
        <Banner/>
        <Feature/>
        <Poster/>
        <NewArrivals/>
        <Poster2/>
        <SpecialOffers/>
    </>
  )
}

export default Home