import { useState } from "react";
import PilihKategori from "./PilihKategori";
import PilihProvinsi from "./PilihProvinsi";
import "./PagePilihProvinsi.css";
import PilihKota from "./PilihKota";

const DUMMY_LIST_KOTA = [
  { provinsi: "Aceh", kota: "a" },
  { provinsi: "Aceh", kota: "b" },
  { provinsi: "Banten", kota: "c" },
  { provinsi: "Aceh", kota: "d" },
  { provinsi: "Banten", kota: "e" },
];

const PagePilihProvinsi = (props) => {
  const [kategori, setKategori] = useState("");
  const [currProv, setCurrProv] = useState("");
  const pilihHandler = (kat) => {
    setKategori(kat);
  };
  const pilihProvinsiHandler = (prov) => {
    setCurrProv(prov);
  };
  const selectHandler = (val) => {
    console.log(val);
  };
  return (
    <div className="page-pilih-provinsi">
      {currProv === "" && (
        <div className="cont">
          <PilihKategori onPilih={pilihHandler} label="Kategori" current="" />
          <div className="page-break__container">
            <div className="page-break" />
          </div>
          <PilihProvinsi
            listProvinsi={props.listProvinsi}
            kategori={kategori}
            onPilihProvinsi={pilihProvinsiHandler}
          />
        </div>
      )}
      {currProv !== "" && (
        <div className="cont">
          <PilihKategori
            onPilih={pilihHandler}
            label={currProv}
            current={kategori}
          />
          <PilihKota
            kota={DUMMY_LIST_KOTA.filter((kota) => {
              return kota.provinsi === currProv;
            })}
            onSelect={selectHandler}
          />
          <div className="page-break__container">
            <div className="page-break" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PagePilihProvinsi;
