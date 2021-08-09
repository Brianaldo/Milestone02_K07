import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NavContext } from '../../Context/NavContext';

const NavBar = ()=>{
    const { showNav, setShowNav } = useContext(NavContext)

    const handleClick = ()=>{
        setShowNav(false)
    }

    return(
        <div className='container Navbar'>
            <div className='Navbar-List'>
                <ul>
                    <li>
                        <Link to='/'>
                            <button onClick={handleClick}>Home</button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/kategori'>
                            <button onClick={handleClick}>Kategori</button>
                        </Link>
                    </li>
                    <li>tester</li>
                </ul>
            </div>
        </div>
    )
};

export default NavBar;