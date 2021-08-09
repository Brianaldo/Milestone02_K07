import "./DataRumahSakit.css";
import RumahSakit from "./RumahSakit.png"
// import Alamat from "./Alamat.png"

const DataRumahSakit = (props) => {
  return (
    <div className="data-rumah-sakit">
      <div className="data">
        <h2>{props.rs}</h2>
        <div className="style">
          <img src={null}/>
          <p>{props.alamat}</p>
        </div>
        <div className="style">
          <img />
          <p>{props.telp}</p>
        </div>
        <div className="style">
          <img />
          <p>{props.jumlahBed}</p>
        </div>
        <div className="style">
          <img />
          <p>{props.jumlahAntrian}</p>
        </div>
      </div>
      <div className="kategori">
        <img src={RumahSakit}/>
      </div>
      <div className="update-terakhir">
        <p>{"Diupdate: " + props.update}</p>
      </div>
    </div>
  );
};

export default DataRumahSakit;
