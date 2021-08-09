import React from 'react';
import { Link } from 'react-router-dom';
// isi ini logonya sama navbar

const Nav = ()=>{

    return(
        <>
            <Link to='/'>
                <button>Back</button>
            </Link>
            <h3>navbar(kalo jadi)</h3>
        </>
    )
}

export default Nav;