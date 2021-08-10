import React,{ useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { KategoriContext } from '../../Context/KategoriContext';


const ListKategori = ()=>{
    const { kategori, setKategori } = useContext(KategoriContext)
    const history = useHistory()

    const handleRedirect = (event)=>{
        let inputValue = event.target.name
        console.log(inputValue, event.target.name)
        setKategori(inputValue)
        history.push('/kategori')
    }

    return(
        <div className='listkategori-page'>
            <h2>KATEGORI</h2>
            <br></br>
            <ul>
                <li>
                    <div className='hiasanlogokategori'>
                        <img src={`${process.env.PUBLIC_URL}/logo/RumahSakit.png`} alt='logo-rumahsakit' name='Rumah Sakit' onClick={handleRedirect}/>
                    </div>
                </li>
                <li>
                    <div className='hiasanlogokategori'>
                        <img src={`${process.env.PUBLIC_URL}/logo/InfoOksigen.png`} alt='logo-tabungoksigen' name='Info Oksigen' onClick={handleRedirect}/>
                    </div>
                </li>
                <li>
                    <div className='hiasanlogokategori'>
                        <img src={`${process.env.PUBLIC_URL}/logo/LokasiVaksinasi.png`} alt='logo-vaksin' name='Lokasi Vaksinasi' onClick={handleRedirect}/>
                    </div>
                </li>
            </ul>
        </div>
    )
};

export default ListKategori;