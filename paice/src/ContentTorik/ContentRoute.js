import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import PagePilihProvinsi from '../Components/PagePilihProvinsi/PagePilihProvinsi';
import { DUMMY_LIST_PROVINSI } from '../Components/PagePilihProvinsi/DummyList';
import { DUMMY_LIST_KOTA } from '../Components/PagePilihProvinsi/DummyList';
import Home from '../Components/body/Home';
import LandingPage from '../Components/body/LandingPage';
import CekDisini from '../Components/body/CekDisini';



const ContentRoute = ()=>{
    const { Content } = Layout;

    return(
    <>
        <Switch>
            <Content className='container'>
                <Route exact strict path='/'>
                    <LandingPage/>
                    <CekDisini/>
                    <Home/>
                </Route>
                {/* PAGE PILIH KOTA/PROVINSI */}
                <Route exact strict path ='/kategori'>
                    <PagePilihProvinsi className='container' listProvinsi={DUMMY_LIST_PROVINSI} />
                </Route>
            </Content>
        </Switch>
    </>)
}

export default ContentRoute;