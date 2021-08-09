import PilihKategori from "../PilihKategori/PilihKategori";
import "./PageKategoriProvinsi.css";
import PilihKota from "./PilihKota";

const PageKategoriProvinsi = () => {
    const DUMMY_KOTA = "Kabupaten/Kota"
  return (
    <div className="PageKategoriProvinsi">
      <PilihKategori
        onPilih={pilihHandler}
        label={currProv}
        current={kategori}
      />
      <PilihKota
        kota={DUMMY_LIST_KOTA.filter((kota) => {
          return kota.provinsi === currProv;
        })}
        onSelect={selectHandler}
      />
      <div className="page-break__container">
        <div className="page-break" />
      </div>
    </div>
  );
};

export default PageKategoriProvinsi;
