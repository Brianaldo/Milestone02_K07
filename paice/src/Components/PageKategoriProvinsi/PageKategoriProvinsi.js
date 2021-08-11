import { useContext, useState, useEffect } from "react";
import PilihKategori from "../PilihKategori/PilihKategori";
import DataRumahSakit from "./DataRumahSakit";
import DataInfoOksigen from "./DataInfoOksigen";
import "./PageKategoriProvinsi.css";
import PilihKota from "./PilihKota";
import DataLokasiVaksinasi from "./DataLokasiVaksinasi";
import { useHistory, useParams } from "react-router-dom";
import { KategoriContext } from "../../Context/KategoriContext";

const PageKategoriProvinsi = () => {
  const history = useHistory();
  const { prov, lokasi } = useParams();
  const { kategori, setKategori } = useContext(KategoriContext);
  const [currKota, setCurrKota] = useState("");
  const [listKota, setListKota] = useState([]);
  const [listRS, setListRS] = useState([]);
  const [listIO, setListIO] = useState([]);
  const [listLV, setListLV] = useState([]);

  const pilihHandler = (kat) => {
    setKategori(kat);
    setListRS([]);
    setListIO([]);
    setListLV([]);
    if (kategori === "Rumah Sakit") {
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
        });
    } else if (kategori === "Info Oksigen") {
      fetch("http://localhost:5000/oksigen", {
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
        });
    } else if (kategori === "Lokasi Vaksinasi") {
      fetch("http://localhost:5000/vaksin", {
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
        });
    }
    history.push(`/kategori/${prov}/${kategori}`);
  };

  const selectHandler = (kt) => {
    if (kategori === "Rumah Sakit") {
      fetch("http://localhost:5000/hospital", {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          Provinsi: prov,
          Kota: kt,
        }),
      })
        .then((res) => res.json())
        .then((Data) => {
          setListRS(Data.Response);
        });
    } else if (kategori === "Info Oksigen") {
      fetch("http://localhost:5000/oksigen", {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          Provinsi: prov,
          Kota: kt,
        }),
      })
        .then((res) => res.json())
        .then((Data) => {
          setListIO(Data.Response);
        });
    } else if (kategori === "Lokasi Vaksinasi") {
      fetch("http://localhost:5000/vaksin", {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          Provinsi: prov,
          Kota: kt,
        }),
      })
        .then((res) => res.json())
        .then((Data) => {
          setListLV(Data.Response);
        });
    }
  };

  console.log(listRS);

  useEffect(() => {
    if (kategori === "Rumah Sakit") {
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
        });
    } else if (kategori === "Info Oksigen") {
      fetch("http://localhost:5000/oksigen", {
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
        });
    } else if (kategori === "Lokasi Vaksinasi") {
      fetch("http://localhost:5000/vaksin", {
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
        });
    }
  }, []);

  return (
    <div className="page-kategori-provinsi">
      <PilihKategori onPilih={pilihHandler} label={prov} current={kategori} />
      <PilihKota kota={listKota} onSelect={selectHandler} />
      <div className="page-break__container">
        <div className="page-break" />
      </div>
      <div className="list">
        {kategori === "Rumah Sakit" &&
          listRS.map((rs) => (
            <DataRumahSakit
              rs={rs.Nama}
              alamat={rs.Alamat}
              telp={rs.No_Telepon}
              jumlahBed={rs.Ketersediaan}
              jumlahAntrian={rs.Antrian_Pasien}
              update={rs.Waktu_Update}
            />
          ))}
        {kategori === "Info Oksigen" &&
          listIO.map((io) => (
            <DataInfoOksigen
              io={io.Nama}
              alamat={io.Alamat}
              telp={io.No_Telepon}
              link={io.URL}
              update={io.Waktu_Update}
            />
          ))}
        {kategori === "Lokasi Vaksinasi" &&
          listLV.map((lv) => (
            <DataLokasiVaksinasi
              lv={lv.Nama}
              alamat={lv.Alamat}
              telp={lv.No_Telepon}
              link={lv.URL}
              update={lv.Waktu_Update}
            />
          ))}
      </div>
    </div>
  );
};

export default PageKategoriProvinsi;
