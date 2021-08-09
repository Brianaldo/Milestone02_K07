import React from 'react';

const ListKategori = ()=>{
    return(
        <div className='listkategori-page'>
            <h2>KATEGORI</h2>
            <br></br>
            <ul>
                <li>
                    <div className='hiasanlogokategori'>
                        <img src={`${process.env.PUBLIC_URL}/logo/RumahSakit.png`} alt='logo-rumahsakit'/>
                    </div>
                </li>
                <li>
                    <div className='hiasanlogokategori'>
                        <img src={`${process.env.PUBLIC_URL}/logo/InfoOksigen.png`} alt='logo-tabungoksigen'/>
                    </div>
                </li>
                <li>
                    <div className='hiasanlogokategori'>
                        <img src={`${process.env.PUBLIC_URL}/logo/LokasiVaksinasi.png`} alt='logo-vaksin'/>
                    </div>
                </li>
            </ul>
        </div>
    )
};

export default ListKategori;