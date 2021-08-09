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
    )
};

export default NavBar;