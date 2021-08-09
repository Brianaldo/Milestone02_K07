import React from 'react';

const LandingPage = ()=>{
    return(
        <div className='landing-page'>
            <img src={`${process.env.PUBLIC_URL}/home.png`}/>
        </div>
    )
};

export default LandingPage;