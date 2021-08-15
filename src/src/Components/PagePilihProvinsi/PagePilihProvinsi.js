import React, { useEffect, useState, useContext } from 'react';
import PilihKategori from "../PilihKategori/PilihKategori";
import PilihProvinsi from "./PilihProvinsi";
import "./PagePilihProvinsi.css";
import { NavContext } from '../../Context/NavContext';
import { KategoriContext } from '../../Context/KategoriContext';
import { ProvinsiContext } from '../../Context/ProvinsiContext';

const PagePilihProvinsi = (props) => {
  const [data, setData] = useState([{}]);
  const { provinsi, setProvinsi } = useContext(ProvinsiContext)


  useEffect(() => {
    fetch("https://paice-backend.herokuapp.com/statistik").then(
      res => res.json(),
    ).then( Data =>{
      setData(Data.Response)
      console.log(Data)
    })
  }, [])

  const { kategori, setKategori } = useContext(KategoriContext)

  const pilihHandler = (kat) => {
    setKategori(kat);
    console.log(kategori)
  };

  // console.log(data.Response)
  // console.log(data)

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
        listProvinsi={data}
        kategori={kategori}
      />
    </div>
  );
};

export default PagePilihProvinsi;
