import "./Provinsi.css";
import RumahSakit from "../PilihKategori/RumahSakit.png";
import InfoOksigen from "../PilihKategori/InfoOksigen.png";
import React from 'react';
import LokasiVaksinasi from "../PilihKategori/LokasiVaksinasi.png";

const Provinsi = (props) => {
  const clickHandler = () => {
    props.onSelect(props.label);
  };
  return (
    <button className="provinsi" type="button" onClick={clickHandler}>
      <div className="provinsi__text">
        <h2>{props.label}</h2>
        <p>{props.kasusAktif + " kasus aktif"}</p>
      </div>
      <div className="provinsi__list-kategori">
        {props.rs === true && (
          <div className="provinsi__kategori">
            <img src={RumahSakit} alt="" />
          </div>
        )}
        {props.io === true && (
          <div className="provinsi__kategori">
            <img src={InfoOksigen} alt="" />
          </div>
        )}
        {props.lv === true && (
          <div className="provinsi__kategori">
            <img src={LokasiVaksinasi} alt="" />
          </div>
        )}
      </div>
    </button>
  );
};

export default Provinsi;
