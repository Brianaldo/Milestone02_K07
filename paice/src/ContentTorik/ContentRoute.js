import React from 'react';
import { Switch, Link } from 'react-router-dom';
import { Layout } from 'antd';
import PagePilihProvinsi from '../Components/PagePilihProvinsi/PagePilihProvinsi';
import { DUMMY_LIST_PROVINSI } from '../Components/PagePilihProvinsi/DummyList';
import { DUMMY_LIST_KOTA } from '../Components/PagePilihProvinsi/DummyList';



const ContentRoute = ()=>{
    const { Content } = Layout;

    return(
    <>
        <Switch>
            <Content className='container'>
                {/* PAGE PILIH KOTA/PROVINSI */}
                <PagePilihProvinsi className='container' listProvinsi={DUMMY_LIST_PROVINSI} />
            </Content>
        </Switch>
    </>)
}

export default ContentRoute;