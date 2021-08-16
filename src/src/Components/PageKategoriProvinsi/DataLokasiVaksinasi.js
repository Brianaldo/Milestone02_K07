import "./DataLokasiVaksinasi.css";
import LokasiVaksinasi from "./LokasiVaksinasi.png";
import Lokasi from "./Lokasi.png";
import NoTelp from "./NoTelp.png";
import URL from "./URL.png";

const DataLokasiVaksinasi = (props) => {
  return (
    <div className="data-lokasi-vaksinasi">
      <div className="data">
        <h2>{props.lv}</h2>
        <div className="style">
          <img src={Lokasi} alt="" />
          <p>{props.alamat}</p>
        </div>
        <div className="style">
          <img src={NoTelp} alt="" />
          <p>{props.telp}</p>
        </div>
        <div className="style">
          <img src={URL} alt="" />
          {props.link !== "-" && <a href={props.link} target="_blank">
            {props.lv}
          </a>}
          {props.link === "-" && <p>Tidak ada </p>}
        </div>
      </div>
      <div className="kategori">
        <img src={LokasiVaksinasi} />
      </div>
      <div className="update-terakhir">
        <p>{"Diupdate: " + props.update}</p>
      </div>
    </div>
  );
};

export default DataLokasiVaksinasi;
