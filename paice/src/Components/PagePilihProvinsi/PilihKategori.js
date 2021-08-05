import "./PilihKategori.css";
import RumahSakit from "./RumahSakit.png";
import InfoOksigen from "./InfoOksigen.png";
import LokasiVaksinasi from "./LokasiVaksinasi.png";
import { useState } from "react";

const PilihKategori = () => {
  const [currKategori, setCurrKategori] = useState("");

  const rumahSakitHandler = () => {
    setCurrKategori("Rumah Sakit");
  };

  const infoOksigenHandler = () => {
    setCurrKategori("Info Oksigen");
  };

  const lokasiVaksinasiHandler = () => {
    setCurrKategori("Info Oksigen");
  };

  return (
    <div className="pilih-kategori">
      <button onClick={rumahSakitHandler}>
        <img src={RumahSakit} alt="" />
        <br></br>
        <label>Rumah Sakit</label>
      </button>
      <button onClick={infoOksigenHandler}>
        <img src={InfoOksigen} alt="" />
        <br></br>
        <label>Info Oksigen</label>
      </button>
      <button onClick={lokasiVaksinasiHandler}>
        <img src={LokasiVaksinasi} alt="" />
        <br></br>
        <label>Lokasi Vaksinasi</label>
      </button>
    </div>
  );
};

export default PilihKategori;
