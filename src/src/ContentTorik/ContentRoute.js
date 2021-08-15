import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { Layout } from "antd";
import PagePilihProvinsi from "../Components/PagePilihProvinsi/PagePilihProvinsi";
import { DUMMY_LIST_PROVINSI } from "../Components/PagePilihProvinsi/DummyList";
import { DUMMY_LIST_KOTA } from "../Components/PagePilihProvinsi/DummyList";
import LandingPage from "../Components/body/LandingPage";
import CekDisini from "../Components/body/CekDisini";
import ListKategori from "../Components/body/ListKategori";
import PageKategoriProvinsi from "../Components/PageKategoriProvinsi/PageKategoriProvinsi";
import Peta from "../Components/Peta/Peta";

const ContentRoute = () => {
  const { Content } = Layout;

  return (
    <>
      <Switch>
        <Content className="container">
          <Route exact strict path="/">
            <LandingPage />
            <Peta />
            <CekDisini />
            {/* <ListKategori/> */}
          </Route>
          {/* PAGE PILIH KOTA/PROVINSI */}
          <Route exact strict path="/kategori">
            <PagePilihProvinsi
              className="container"
              listProvinsi={DUMMY_LIST_PROVINSI}
            />
          </Route>
          <Route exact strict path="/kategori/:prov/:kategori">
            <PageKategoriProvinsi className="container" />
          </Route>
        </Content>
      </Switch>
    </>
  );
};

export default ContentRoute;
