import React,{ useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { MenuFoldOutlined } from '@ant-design/icons';
import { NavContext } from '../../Context/NavContext';

// isi ini logonya sama navbar

const Nav = ()=>{
    const {showNav, setShowNav} = useContext(NavContext)
    console.log(showNav)
    
    const handleShow = ()=>{
        setShowNav(!showNav)
        console.log(showNav)
    }

    return(
        <div className='container-nav'>
            <div className='container-header header'>
            { showNav ? 
                <div className='after-nav-pressed'>
                    <button onClick={handleShow}>back x sign</button>
                </div>
                : 
                <>
                    <Link to='/'>
                        <button>Back</button>
                    </Link>
                    <MenuFoldOutlined onClick={handleShow}/>
                </>
            }
            </div>      
        </div>
    )
}

export default Nav;