import React,{ useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { MenuFoldOutlined, CloseOutlined } from '@ant-design/icons';
import { NavContext } from '../../Context/NavContext';

// isi ini logonya sama navbar

const Nav = ()=>{
    const {showNav, setShowNav} = useContext(NavContext)
    
    const handleShow = ()=>{
        setShowNav(!showNav)
    }

    return(
        <div className='container-nav'>
            <div className='container-header header'>
                <Link to='/'>
                        <img id='logo' src={`${process.env.PUBLIC_URL}/logo.png`}/>
                </Link>
                {
                    showNav ? 
                    <CloseOutlined  onClick={handleShow}/>
                    :
                    <MenuFoldOutlined onClick={handleShow}/>
                }
               
            
            </div>      
        </div>
    )
}

export default Nav;