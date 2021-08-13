import React from "react";
import "./DataInfoOksigen.css";
import InfoOksigen from "./InfoOksigen.png"
import Lokasi from "./Lokasi.png";
import NoTelp from "./NoTelp.png";
import URL from "./URL.png";

const DataInfoOksigen = (props) => {

  return (
    <div className="data-info-oksigen">
      <div className="data">
        <h2>{props.io}</h2>
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
          <a href={props.link} target="_blank">{props.link}</a>
        </div>
      </div>
      <div className="kategori">
        <img src={InfoOksigen}/>
      </div>
      <div className="update-terakhir">
        <p>{"Diupdate: " + props.update}</p>
      </div>
    </div>
  );
};

export default DataInfoOksigen;
