import { useState } from "react";
import PilihKategori from "./PilihKategori";
import PilihProvinsi from "./PilihProvinsi";
import "./PagePilihProvinsi.css";

const PagePilihProvinsi = (props) => {
  const [kategori, setKategori] = useState("");
  const pilihHandler = (kat) => {
    setKategori(kat);
  };
  return (
    <div className="page-pilih-provinsi">
      <PilihKategori onPilih={pilihHandler} />
      <div className="page-break__container">
        <div className="page-break" />
      </div>
      <PilihProvinsi listProvinsi={props.listProvinsi} kategori={kategori} />
    </div>
  );
};

export default PagePilihProvinsi;
