import React, { useContext } from 'react';
import { useState } from "react";
import PilihKategori from "../PilihKategori/PilihKategori";
import PilihProvinsi from "./PilihProvinsi";
import "./PagePilihProvinsi.css";
import { NavContext } from '../../Context/NavContext';
import { KategoriContext } from '../../Context/KategoriContext';
// import PilihKota from "./PilihKota"; 

const DUMMY_LIST_KOTA = [
  { provinsi: "Aceh", kota: "a" },
  { provinsi: "Aceh", kota: "b" },
  { provinsi: "Banten", kota: "c" },
  { provinsi: "Aceh", kota: "d" },
  { provinsi: "Banten", kota: "e" },
];

const PagePilihProvinsi = (props) => {
  const { kategori, setKategori } = useContext(KategoriContext)

  const pilihHandler = (kat) => {
    setKategori(kat);
  };

  return (
    <div className="page-pilih-provinsi">
      <PilihKategori onPilih={pilihHandler} label="Kategori" current="" />
      <div className="page-break__container">
        <div className="page-break" />
      </div>
      <PilihProvinsi
        listProvinsi={props.listProvinsi}
        kategori={kategori}
      />
    </div>
  );
};

export default PagePilihProvinsi;
