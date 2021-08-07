import "./PilihKategori.css";
import RumahSakit from "./RumahSakit.png";
import InfoOksigen from "./InfoOksigen.png";
import LokasiVaksinasi from "./LokasiVaksinasi.png";

const PilihKategori = (props) => {
  const rumahSakitHandler = () => {
    props.onPilih("Rumah Sakit");
  };

  const infoOksigenHandler = () => {
    props.onPilih("Info Oksigen");
  };

  const lokasiVaksinasiHandler = () => {
    props.onPilih("Lokasi Vaksinasi");
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
