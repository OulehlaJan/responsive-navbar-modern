import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../images/netflix.png'
import './Navbar.css'

// Main Navbar component
const Navbar = () => {
    // State variable to control the visibility of the menu
    const [showMenu, setShowMenu] = useState(false)

    return (
        <nav>
            <div className='navigation'>
                <div className='nav-header'>
                    <img src={logo} alt='Logo' />
                    <button onClick={() => setShowMenu(!showMenu)}>
                        <GiHamburgerMenu className='hamburger-icon' />
                    </button>
                </div>
                 {/* Navigation links that toggle visibility based on showMenu state */}
                <div className={`${showMenu ? 'show' : 'hide'}`}>
                    <NavLink to='/' className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Domů</NavLink>
                    <NavLink to='/news' className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>News</NavLink>
                    <NavLink to='/about' className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>About</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar