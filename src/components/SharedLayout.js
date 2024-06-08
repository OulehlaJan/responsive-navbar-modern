import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import './SharedLayout.css';

const SharedLayout = () => {
    return <div className='shared-layout'>
        <Navbar />
        <div className="main-content">
            <Outlet />
        </div>
        <Footer />
    </div>
}

export default SharedLayout