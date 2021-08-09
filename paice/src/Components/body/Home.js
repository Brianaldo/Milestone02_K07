import React from 'react';
import { Link } from 'react-router-dom'
// ini isinya buat dropdown2

const Home = ()=>{
    return(
    <>
        <Link to='/kategori'>
            <button>Kategori</button>
        </Link>
    </>
    )
}

export default Home;