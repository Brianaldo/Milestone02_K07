import { useContext, useState, useEffect } from "react";
import PilihKategori from "../PilihKategori/PilihKategori";
import DataRumahSakit from "./DataRumahSakit";
import DataInfoOksigen from "./DataInfoOksigen";
import "./PageKategoriProvinsi.css";
import PilihKota from "./PilihKota";
import DataLokasiVaksinasi from "./DataLokasiVaksinasi";
import { useHistory, useParams } from "react-router-dom";
import { KategoriContext } from "../../Context/KategoriContext";
import Loader from "./Loader";
import LoadingCircle from "./LoadingCircle";

const PageKategoriProvinsi = () => {
  const history = useHistory();
  const { prov, lokasi } = useParams();
  const { kategori, setKategori } = useContext(KategoriContext);
  const [currKota, setCurrKota] = useState("");
  const [listKota, setListKota] = useState([]);
  const [listRS, setListRS] = useState([]);
  const [listIO, setListIO] = useState([]);
  const [listLV, setListLV] = useState([]);
  const [loadingKota, setLoadingKota] = useState(false);
  const [loading, setLoading] = useState(false);
  const [kategoriClicked, setKategoriClicked] = useState(false);
  const [error, setError] = useState(false);
  const [isKotaTerpilih, setIsKotaTerpilih] = useState(false);

  const pilihHandler = (kat) => {
    setKategoriClicked(true);
    setLoadingKota(true);
    setListKota([]);
    setKategori(kat);
    setListRS([]);
    setListIO([]);
    setListLV([]);
    setError(false);
    setIsKotaTerpilih(false);
    setLoading(false);
    if (kategori === "Rumah Sakit") {
      fetch("https://paice-backend.herokuapp.com/hospital", {
        headers: {
          Accept: "application/json",
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
          setLoadingKota(false);
          setError(false);
        })
        .catch((e) => {
          setError(true);
        });
    } else if (kategori === "Info Oksigen") {
      fetch("https://paice-backend.herokuapp.com/oksigen", {
        headers: {
          Accept: "application/json",
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
          setLoadingKota(false);
          setError(false);
        })
        .catch((e) => {
          setError(true);
        });
    } else if (kategori === "Lokasi Vaksinasi") {
      fetch("https://paice-backend.herokuapp.com/vaksin", {
        headers: {
          Accept: "application/json",
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
          setLoadingKota(false);
          setError(false);
        })
        .catch((e) => {
          setError(true);
        });
    }
    history.push(`/kategori/${prov}/${kategori}`);
  };

  const selectHandler = (kt) => {
    setIsKotaTerpilih(true);
    setKategoriClicked(false);
    setLoading(true);
    setError(false);
    if (kategori === "Rumah Sakit") {
      fetch("https://paice-backend.herokuapp.com/hospital", {
        headers: {
          Accept: "application/json",
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
          setLoading(false);
          setError(false);
        })
        .catch((e) => {
          setError(true);
        });
    } else if (kategori === "Info Oksigen") {
      fetch("https://paice-backend.herokuapp.com/oksigen", {
        headers: {
          Accept: "application/json",
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
          setLoading(false);
          setError(false);
        })
        .catch((e) => {
          setError(true);
        });
    } else if (kategori === "Lokasi Vaksinasi") {
      fetch("https://paice-backend.herokuapp.com/vaksin", {
        headers: {
          Accept: "application/json",
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
          setLoading(false);
          setError(false);
        })
        .catch((e) => {
          setError(true);
          console.log("error");
        });
    }
  };

  useEffect(() => {
    setLoadingKota(true);
    setError(false);
    if (kategori === "Rumah Sakit") {
      fetch("https://paice-backend.herokuapp.com/hospital", {
        headers: {
          Accept: "application/json",
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
          setLoadingKota(false);
          setError(false);
        })
        .catch((e) => {
          setError(true);
        });
    } else if (kategori === "Info Oksigen") {
      fetch("https://paice-backend.herokuapp.com/oksigen", {
        headers: {
          Accept: "application/json",
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
          setLoadingKota(false);
          setError(false);
        })
        .catch((e) => {
          setError(true);
        });
    } else if (kategori === "Lokasi Vaksinasi") {
      fetch("https://paice-backend.herokuapp.com/vaksin", {
        headers: {
          Accept: "application/json",
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
          setLoadingKota(false);
          setError(false);
        })
        .catch((e) => {
          setError(true);
        });
    }
  }, []);

  return (
    <div className="page-kategori-provinsi">
      <PilihKategori onPilih={pilihHandler} label={prov} current={kategori} />
      <div className="container-pilih-kota">
        <PilihKota
          kota={listKota}
          onSelect={selectHandler}
          default="__DEFAULT__"
        />
        {/* <LoadingCircle /> */}
        {loadingKota && (
          <div className="loading-circle-container">
            <LoadingCircle />
          </div>
        )}
      </div>
      <div className="page-break__container">
        <div className="page-break" />
      </div>
      {!error && loading && <Loader />}
      <div className="list">
        {!isKotaTerpilih && <div>Pilih Kota/Kabupaten</div>}
        {!loading &&
          !error &&
          !kategoriClicked &&
          kategori === "Rumah Sakit" &&
          listRS.length === 0 && <div>Tidak ada data</div>}
        {!loading &&
          !error &&
          !kategoriClicked &&
          kategori === "Info Oksigen" &&
          listIO.length === 0 && <div>Tidak ada data</div>}
        {!loading &&
          !error &&
          !kategoriClicked &&
          kategori === "Lokasi Vaksinasi" &&
          listLV.length === 0 && <div>Tidak ada data</div>}
        {error && <div>Maaf, ada error terjadi</div>}
        {!loading &&
          kategori === "Rumah Sakit" &&
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
        {!loading &&
          kategori === "Info Oksigen" &&
          listIO.map((io) => (
            <DataInfoOksigen
              io={io.Nama}
              alamat={io.Alamat}
              telp={io.No_Telepon}
              link={io.URL}
              update={io.Waktu_Update}
            />
          ))}
        {!loading &&
          kategori === "Lokasi Vaksinasi" &&
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
