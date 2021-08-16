import React, { useEffect, useState } from "react";
import "./PilihKota.css";

const PilihKota = (props) => {
  const selectHandler = (event) => {
    props.onSelect(event.target.value);
  };
  return (
    <div className="pilih-kota">
      <select onChange={selectHandler}>
        {props.kota.length === 0 && (
          <option selected label="Pilih Kota/Kabupaten" value="" />
        )}
        {props.kota.length !== 0 && (
          <option selected disabled label="Pilih Kota/Kabupaten" value="" />
        )}
        {props.kota.map((kt) => (
          <option value={kt}>{kt}</option>
        ))}
      </select>
    </div>
  );
};

export default PilihKota;
