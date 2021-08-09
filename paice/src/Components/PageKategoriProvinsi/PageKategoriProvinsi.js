import { useState } from "react";
import PilihKategori from "../PilihKategori/PilihKategori";
import DataRumahSakit from "./DataRumahSakit";
import "./PageKategoriProvinsi.css";
import PilihKota from "./PilihKota";

const DUMMY_LIST_KOTA = [
  { provinsi: "Aceh", kota: "a" },
  { provinsi: "Aceh", kota: "b" },
  { provinsi: "Banten", kota: "c" },
  { provinsi: "Aceh", kota: "d" },
  { provinsi: "Banten", kota: "e" },
];

const DUMMY_LIST_RUMAHSAKIT = [
  {
    kota: "a",
    rs: "rs1",
    alamat: "nncn.lnonqfnqfon qquh oiqhjfj oq qofnnf olqfnn ofqf",
    telp: "(021) 1111 1111",
    jumlahBed: "100",
    jumlahAntrian: "100",
    update: "xx-xx-xxx",
  },
  {
    kota: "b",
    rs: "rs2",
    alamat: "nncn.lnonqfnqfon qquh oiqhjfj oq qofnnf olqfnn ofqf",
    telp: "(021) 1111 1111",
    jumlahBed: "100",
    jumlahAntrian: "100",
    update: "xx-xx-xxx",
  },
  {
    kota: "a",
    rs: "rs3",
    alamat: "nncn.lnonqfnqfon qquh oiqhjfj oq qofnnf olqfnn ofqf",
    telp: "(021) 1111 1111",
    jumlahBed: "100",
    jumlahAntrian: "100",
    update: "xx-xx-xxx",
  },
  {
    kota: "a",
    rs: "rs4",
    alamat: "nncn.lnonqfnqfon qquh oiqhjfj oq qofnnf olqfnn ofqf",
    telp: "(021) 1111 1111",
    jumlahBed: "100",
    jumlahAntrian: "100",
    update: "xx-xx-xxx",
  },
  {
    kota: "a",
    rs: "rs5",
    alamat: "nncn.lnonqfnqfon qquh oiqhjfj oq qofnnf olqfnn ofqf",
    telp: "(021) 1111 1111",
    jumlahBed: "100",
    jumlahAntrian: "100",
    update: "xx-xx-xxx",
  },
];

const PageKategoriProvinsi = () => {
  const [currProv, setCurrProv] = useState("Aceh"); //nanti dapet passingan
  const [kategori, setKategori] = useState("Rumah Sakit"); //nanti dapat passingan
  const [currKota, setCurrKota] = useState("");
  const pilihHandler = (kat) => {
    setKategori(kat);
  };
  const selectHandler = (kt) => {
    setCurrKota(kt);
  };
  return (
    <div className="page-kategori-provinsi">
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
      <div className="list">
        {DUMMY_LIST_RUMAHSAKIT.filter((rs) => {
          return rs.kota === currKota;
        }).map((rs) => (
          <DataRumahSakit
            rs={rs.rs}
            alamat={rs.alamat}
            telp={rs.telp}
            jumlahBed={rs.jumlahBed}
            jumlahAntrian={rs.jumlahAntrian}
            update={rs.update}
          />
        ))}
      </div>
    </div>
  );
};

export default PageKategoriProvinsi;
