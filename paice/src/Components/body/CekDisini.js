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
                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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