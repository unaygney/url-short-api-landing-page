import { useState } from 'react';
// Logo
import Logo from '../assets/logo.svg'
import ButonLogo from '../assets/burger.svg'

function Navbar() {

    const [isActive , setIsActive] = useState(false)

    const toggleActive = () => {
        setIsActive(!isActive)
    }
    return ( 

        <>
        <nav className="navbar">

        <div className="logo">
            <img src={Logo} alt="logo" />
        </div>
<div className={isActive ? 'links-login-container active' : 'links-login-container'}>

        <ul className='links'>
            <li className='link'><a href="#">Features</a></li>
            <li className='link'><a href="#">Pricing</a></li>
            <li className='link'><a href="#">Resources</a></li>
        </ul>

        <div className="login-container">
            <a className='login' href="#">Login</a>
            <a className='login active' href="#">Sign Up</a>
        </div>

</div>

<button className='hamburger-btn' onClick={toggleActive}>
    <img src={ButonLogo} alt="btn" />
</button>


        </nav>
        
        
        </>
     );
}

export default Navbar;