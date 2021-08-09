import React, { useContext } from 'react';
import { useState } from "react";
import PilihKategori from "../PilihKategori/PilihKategori";
import PilihProvinsi from "./PilihProvinsi";
import "./PagePilihProvinsi.css";
import { NavContext } from '../../Context/NavContext';
// import PilihKota from "./PilihKota"; 



const PagePilihProvinsi = (props) => {
  const [kategori, setKategori] = useState("");
  const pilihHandler = (kat) => {
    setKategori(kat);
  };

  const selectHandler = (val) => {
    console.log(val);
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
