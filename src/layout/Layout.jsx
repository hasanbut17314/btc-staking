import Header from '../components/common/Header'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import { Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
    const location = useLocation()
    return (
        <>
            {location.pathname !== '/' ? <Navbar /> : <Header />}
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout