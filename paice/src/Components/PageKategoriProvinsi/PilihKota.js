import React, { useEffect, useState } from "react";
import "./PilihKota.css";

const PilihKota = (props) => {
  const selectHandler = (event) => {
    props.onSelect(event.target.value);
  };
  return (
    <div className="pilih-kota">
      <select onChange={selectHandler} >
        <option label="Pilih Kota/Kabupaten" value="" selected disabled></option>
        {props.kota.map((kt) => (
          <option value={kt}>{kt}</option>
        ))}
      </select>
    </div>
  );
};

export default PilihKota;
