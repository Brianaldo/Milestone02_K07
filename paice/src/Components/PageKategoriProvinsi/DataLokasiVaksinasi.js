import "./DataLokasiVaksinasi.css";
import LokasiVaksinasi from "./LokasiVaksinasi.png"
// import Alamat from "./Alamat.png"

const DataLokasiVaksinasi = (props) => {
  return (
    <div className="data-lokasi-vaksinasi">
      <div className="data">
        <h2>{props.lv}</h2>
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
          <a href={props.link} target="_blank">{props.link}</a>
        </div>
      </div>
      <div className="kategori">
        <img src={LokasiVaksinasi}/>
      </div>
      <div className="update-terakhir">
        <p>{"Diupdate: " + props.update}</p>
      </div>
    </div>
  );
};

export default DataLokasiVaksinasi;
