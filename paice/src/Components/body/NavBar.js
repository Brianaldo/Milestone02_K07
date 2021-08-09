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
                            <button onClick={handleClick}><label>Home</label></button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/kategori'>
                            <button onClick={handleClick}><label>Kategori</label></button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/tester'>
                            <button onClick={handleClick}><label>Tester</label></button>
                        </Link>                
                    </li>
                    </ul>
            </div>
        </div>
    )
};

export default NavBar;