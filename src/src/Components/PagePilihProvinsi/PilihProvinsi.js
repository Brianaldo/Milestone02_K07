import React, { useContext } from 'react';
import Provinsi from "./Provinsi";
import "./PilihProvinsi.css"
import { useHistory } from 'react-router-dom';
import { KategoriContext } from '../../Context/KategoriContext';

const PilihProvinsi = (props) => {
  const { kategori } = useContext(KategoriContext)
  const history = useHistory()
  
  const provinsiRumahSakit = props.listProvinsi.filter((prov) => {
    return prov.rumahSakit === true;
  });
  const provinsiInfoOksigen = props.listProvinsi.filter((prov) => {
    return prov.infoOksigen === true;
  });
  const provinsiLokasiVaksinasi = props.listProvinsi.filter((prov) => {
    return prov.lokasiVaksinasi === true;
  });

  const selectHandler = (prov) => {
    history.push(`/kategori/${prov}/${kategori}`)
    console.log(kategori)
    console.log(prov);
  };

  return (
    <div className="pilih-provinsi">
      {props.kategori === "Rumah Sakit" &&
        provinsiRumahSakit.map((prov) => (
          <Provinsi
            label={prov.provinsi}
            rs={prov.rumahSakit}
            io={prov.infoOksigen}
            lv={prov.lokasiVaksinasi}
            kasusAktif={prov.kasus_aktif}
            onSelect={selectHandler}
          />
        ))}
      {props.kategori === "Info Oksigen" &&
        provinsiInfoOksigen.map((prov) => (
          <Provinsi
            label={prov.provinsi}
            rs={prov.rumahSakit}
            io={prov.infoOksigen}
            lv={prov.lokasiVaksinasi}
            kasusAktif={prov.kasus_aktif}
            onSelect={selectHandler}
          />
        ))}
      {props.kategori === "Lokasi Vaksinasi" &&
        provinsiLokasiVaksinasi.map((prov) => (
          <Provinsi
            label={prov.provinsi}
            rs={prov.rumahSakit}
            io={prov.infoOksigen}
            lv={prov.lokasiVaksinasi}
            kasusAktif={prov.kasus_aktif}
            onSelect={selectHandler}
          />
        ))}
    </div>
  );
};

export default PilihProvinsi;
