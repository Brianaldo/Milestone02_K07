import "./DataRumahSakit.css";
import RumahSakit from "./RumahSakit.png";
import Lokasi from "./Lokasi.png";
import JumlahAntri from "./JumlahAntri.png";
import JumlahBed from "./JumlahBed.png";
import NoTelp from "./NoTelp.png";

const DataRumahSakit = (props) => {
  return (
    <div className="data-rumah-sakit">
      <div className="data">
        <h2>{props.rs}</h2>
        <div className="style">
          <img src={Lokasi} alt="" />
          <p>{props.alamat}</p>
        </div>
        <div className="style">
          <img src={NoTelp} alt="" />
          <p>{props.telp}</p>
        </div>
        <div className="style">
          <img src={JumlahBed} alt="" />
          <p>{props.jumlahBed}</p>
        </div>
        <div className="style">
          <img src={JumlahAntri} alt=""/>
          <p>{props.jumlahAntrian}</p>
        </div>
      </div>
      <div className="kategori">
        <img src={RumahSakit} />
      </div>
      <div className="update-terakhir">
        <p>{props.update}</p>
      </div>
    </div>
  );
};

export default DataRumahSakit;
