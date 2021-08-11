import "./Provinsi.css";
import React from 'react';

const Provinsi = (props) => {
  const clickHandler = () => {
    props.onSelect(props.label);
  };
  return (
    <button className="provinsi" type="button" onClick={clickHandler}>
      <div className="provinsi__text">
        <h2>{props.label}</h2>
        <p>{props.kasusAktif + " kasus aktif"}</p>
      </div>
      <div className="provinsi__list-kategori">
        {props.rs === true && (
          <div className="provinsi__kategori">
          </div>
        )}
        {props.io === true && (
          <div className="provinsi__kategori">
          </div>
        )}
        {props.lv === true && (
          <div className="provinsi__kategori">
          </div>
        )}
      </div>
    </button>
  );
};

export default Provinsi;
