import React from 'react';
import { Link } from 'react-router-dom';
import { MenuFoldOutlined } from '@ant-design/icons';

// isi ini logonya sama navbar

const Nav = ()=>{

    return(
        <div className='container-header header'>
            <Link to='/'>
                <button>Back</button>
            </Link>
            <MenuFoldOutlined/>
        </div>
    )
}

export default Nav;