import React, { useContext } from 'react';
import { Button } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { KategoriContext } from '../../Context/KategoriContext';


const CekDisini = ()=>{
    const { kategori,setKategori } = useContext(KategoriContext)

    const handleCek = ()=>{
        setKategori('')
    }

    return(
        <div className='cekdisini-page'>
            <div className='info-kategori-p'>
                <p>
                    <b>Virus corona mulai merebak sejak akhir 2019</b> dan telah banyak memakan korban, baik yang dirawat hingga meninggal dunia.
                    Pertama kali muncul di Wuhan, China, virus yang menyerang pernapasan manusia ini juga dikenal dengan nama COVID-19,
                    yang merupakan singkatan dari Coronavirus Disease 19.
                </p>
            </div>
            <br></br><br></br>
            <div className='cek-disini'>
                <Link to='/kategori'>
                    <Button type="primary" onClick={handleCek} id='cekdisinibutton' shape="round"  size={'large'}>
                        <UnorderedListOutlined/>
                        <>      Cek Di Sini!</>
                    </Button>
                </Link>
                <div className='garis-bawah'/>
            </div>
        </div>
    )
};

export default CekDisini;