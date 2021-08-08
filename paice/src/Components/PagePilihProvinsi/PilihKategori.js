import "./PilihKategori.css";
import RumahSakit from "./RumahSakit.png";
import InfoOksigen from "./InfoOksigen.png";
import LokasiVaksinasi from "./LokasiVaksinasi.png";
import { useState } from "react";

const PilihKategori = (props) => {
  const [currKateg, setCurrKateg] = useState("");

  const rumahSakitHandler = () => {
    setCurrKateg("Rumah Sakit");
    props.onPilih("Rumah Sakit");
  };

  const infoOksigenHandler = () => {
    setCurrKateg("Info Oksigen");
    props.onPilih("Info Oksigen");
  };

  const lokasiVaksinasiHandler = () => {
    setCurrKateg("Lokasi Vaksinasi");
    props.onPilih("Lokasi Vaksinasi");
  };

  return (
    <div className="pilih-kategori">
      <h2>{props.label}</h2>
      <div className="pilih-kategori__container">
        <div className="pilih-kategori__">
          <button onClick={rumahSakitHandler}>
            <img src={RumahSakit} alt="" />
          </button>
          {currKateg === "" && (
            <div className="pilih-kategori__select" />
          )}
          {currKateg === "Rumah Sakit" && (
            <div className="pilih-kategori__select red" />
          )}
        </div>
        <div className="pilih-kategori__">
          <button onClick={infoOksigenHandler}>
            <img src={InfoOksigen} alt="" />
          </button>
          {currKateg === "Info Oksigen" && (
            <div className="pilih-kategori__select blue" />
          )}
        </div>
        <div className="pilih-kategori__">
          <button onClick={lokasiVaksinasiHandler}>
            <img src={LokasiVaksinasi} alt="" />
          </button>
          {currKateg === "Lokasi Vaksinasi" && (
            <div className="pilih-kategori__select green" />
          )}
        </div>
      </div>
    </div>
  );
};

export default PilihKategori;
