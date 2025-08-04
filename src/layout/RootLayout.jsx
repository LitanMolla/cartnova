import Navbar from './Navbar'
import { Outlet } from 'react-router'
import Footer from './Footer'

const RootLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default RootLayout