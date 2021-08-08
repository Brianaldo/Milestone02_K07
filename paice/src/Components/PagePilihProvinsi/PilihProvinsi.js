import Provinsi from "./Provinsi";

const PilihProvinsi = (props) => {
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
            kasusAktif={prov.kasusAktif}
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
            kasusAktif={prov.kasusAktif}
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
            kasusAktif={prov.kasusAktif}
            onSelect={selectHandler}
          />
        ))}
    </div>
  );
};

export default PilihProvinsi;
