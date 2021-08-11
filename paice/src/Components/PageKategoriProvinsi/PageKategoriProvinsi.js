import { useContext, useState, useEffect } from "react";
import PilihKategori from "../PilihKategori/PilihKategori";
import DataRumahSakit from "./DataRumahSakit";
import DataInfoOksigen from "./DataInfoOksigen";
import "./PageKategoriProvinsi.css";
import PilihKota from "./PilihKota";
import DataLokasiVaksinasi from "./DataLokasiVaksinasi";
import { useHistory, useParams } from "react-router-dom";
import { KategoriContext } from "../../Context/KategoriContext";

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

const DUMMY_LIST_INFOOKSIGEN = [
  {
    kota: "a",
    io: "io1",
    alamat:
      "asdasfafbfcikbfc,fbcb,f,nbfcfb bflbflbflblfbbfffasbdkabdkbk,dbakbdkbk",
    telp: "(021) 1111 1111",
    link: "https://www.google.com/",
    update: "xx-xx-xxx",
  },
  {
    kota: "b",
    io: "io2",
    alamat:
      "asdasfafbfcikbfc,fbcb,f,nbfcfbb flbflbflblfbbfffasbdkabdkbk,dbakbdkbk",
    telp: "(021) 1111 1111",
    link: "https://www.google.com/",
    update: "xx-xx-xxx",
  },
  {
    kota: "a",
    io: "io3",
    alamat:
      "asdasfafbfcikbfc,fbcb,f,nbfcfbb flbflbflblfbbfffasbdkabdkbk,dbakbdkbk",
    telp: "(021) 1111 1111",
    link: "https://www.google.com/",
    update: "xx-xx-xxx",
  },
  {
    kota: "a",
    io: "io4",
    alamat:
      "asdasfafbfcikbfc,fbcb,f,nb fcfbbflbflbflblfbbfffasbdkabdkbk,dbakbdkbk",
    telp: "(021) 1111 1111",
    link: "https://www.google.com/",
    update: "xx-xx-xxx",
  },
];
const DUMMY_LIST_LOKASIVAKSINASI = [
  {
    kota: "a",
    lv: "lv1",
    alamat:
      "asdasfafbfcikbfc,fbcb,f,nbfcfb bflbflbflblfbbfffasbdkabdkbk,dbakbdkbk",
    telp: "(021) 1111 1111",
    link: "https://www.google.com/",
    update: "xx-xx-xxx",
  },
  {
    kota: "b",
    lv: "lv2",
    alamat:
      "asdasfafbfcikbfc,fbcb,f,nbfcfbb flbflbflblfbbfffasbdkabdkbk,dbakbdkbk",
    telp: "(021) 1111 1111",
    link: "https://www.google.com/",
    update: "xx-xx-xxx",
  },
  {
    kota: "a",
    lv: "lv3",
    alamat:
      "asdasfafbfcikbfc,fbcb,f,nbfcfbb flbflbflblfbbfffasbdkabdkbk,dbakbdkbk",
    telp: "(021) 1111 1111",
    link: "https://www.google.com/",
    update: "xx-xx-xxx",
  },
  {
    kota: "a",
    lv: "lv4",
    alamat:
      "asdasfafbfcikbfc,fbcb,f,nb fcfbbflbflbflblfbbfffasbdkabdkbk,dbakbdkbk",
    telp: "(021) 1111 1111",
    link: "https://www.google.com/",
    update: "xx-xx-xxx",
  },
];
const PageKategoriProvinsi = () => {
  const history = useHistory();
  const { prov, lokasi } = useParams();
  const { kategori, setKategori } = useContext(KategoriContext);
  const [currKota, setCurrKota] = useState("");
  const [listKota, setListKota] = useState([]);
  const pilihHandler = (kat) => {
    setKategori(kat);
    history.push(`/kategori/${prov}/${kategori}`);
  };
  const selectHandler = (kt) => {
    setCurrKota(kt);
  };

  useEffect(() => {
    fetch("http://localhost:5000/hospital", {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        Provinsi: prov,
      }),
    })
      .then((res) => res.json())
      .then((Data) => {
        setListKota(Data.Response);
        console.log(Data.Response)
      });
  }, []);

  console.log(listKota);

  return (
    <div className="page-kategori-provinsi">
      <PilihKategori onPilih={pilihHandler} label={prov} current={kategori} />
      <PilihKota
        kota={listKota}
        onSelect={selectHandler}
      />
      <div className="page-break__container">
        <div className="page-break" />
      </div>
      <div className="list">
        {kategori === "Rumah Sakit" &&
          DUMMY_LIST_RUMAHSAKIT.filter((rs) => {
            if (currKota === "") {
              return rs;
            } else {
              return rs.kota === currKota;
            }
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
        {kategori === "Info Oksigen" &&
          DUMMY_LIST_INFOOKSIGEN.filter((io) => {
            if (currKota === "") {
              return io;
            } else {
              return io.kota === currKota;
            }
          }).map((io) => (
            <DataInfoOksigen
              io={io.io}
              alamat={io.alamat}
              telp={io.telp}
              link={io.link}
              update={io.update}
            />
          ))}
        {kategori === "Lokasi Vaksinasi" &&
          DUMMY_LIST_LOKASIVAKSINASI.filter((lv) => {
            if (currKota === "") {
              return lv;
            } else {
              return lv.kota === currKota;
            }
          }).map((lv) => (
            <DataLokasiVaksinasi
              lv={lv.lv}
              alamat={lv.alamat}
              telp={lv.telp}
              link={lv.link}
              update={lv.update}
            />
          ))}
      </div>
    </div>
  );
};

export default PageKategoriProvinsi;
