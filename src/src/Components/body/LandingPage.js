import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = ()=>{
    return(
        <div className='landing-page'>
            <div className='button-landing'>
                <Link to='/kategori'>
                    <button id='telusuri-button'>TELUSURI</button>
                </Link>
                <button id='contact-button'>KONTAK KAMI</button>
            </div>
        </div>
    )
};

export default LandingPage;