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
            </div>
            <br></br><br></br>
            <div className='garis-bawah'/>
                {/* <Link to='/kategori'>
                    <Button type="primary" onClick={handleCek} id='cekdisinibutton' shape="round"  size={'large'}>
                        <UnorderedListOutlined/>
                        <>      Cek Di Sini!</>
                    </Button>
                </Link> */}
        </div>
    )
};

export default CekDisini;