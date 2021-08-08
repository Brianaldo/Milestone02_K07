import "./Provinsi.css";
import RumahSakit from "./RumahSakit.png";
import InfoOksigen from "./InfoOksigen.png";
import LokasiVaksinasi from "./LokasiVaksinasi.png";

const Provinsi = (props) => {
  const clickHandler = () => {
    props.onSelect(props.label);
  };
  return (
    <button className="provinsi" type="button" onClick={clickHandler}>
      <div className="provinsi__text">
        <h2>{props.label}</h2>
        <p>xx En</p>
      </div>
      <div className="provinsi__list-kategori">
        {props.rs === true && (
          <div className="provinsi__kategori">
            <img src={RumahSakit} alt="" />
          </div>
        )}
        {props.io === true && (
          <div className="provinsi__kategori">
            <img src={InfoOksigen} alt="" />
          </div>
        )}
        {props.lv === true && (
          <div className="provinsi__kategori">
            <img src={LokasiVaksinasi} alt="" />
          </div>
        )}
      </div>
    </button>
  );
};

export default Provinsi;
