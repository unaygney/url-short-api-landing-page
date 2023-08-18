// Components
import Navbar from './Navbar';

function Header() {
    return ( 
        <>
        <Navbar/>
        
<header className='header'>

<div className="content">

        <h1>
        More than just shorter links
        </h1>

        <p>
        Build your brand’s recognition and get detailed insights on how your links are performing.
        </p>

        <a className='btn-primary' href="#">Get Started</a>

</div>
</header>
        
        </>
     );
}

export default Header;