import "./App.css";
import Dropdown from "./Components/body/Dropdown";
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import PagePilihProvinsi from "./Components/PagePilihProvinsi/PagePilihProvinsi";

const DUMMY_LIST_PROVINSI = [
  {
    provinsi: "Aceh",
    rumahSakit: true,
    infoOksigen: true,
    lokasiVaksinasi: true,
    kasusAktif: "100",
  },
  {
    provinsi: "Bali",
    rumahSakit: true,
    infoOksigen: false,
    lokasiVaksinasi: true,
    kasusAktif: "100",
  },
  {
    provinsi: "Bangka Belitung",
    rumahSakit: true,
    infoOksigen: false,
    lokasiVaksinasi: false,
    kasusAktif: "100",
  },
  {
    provinsi: "Banten",
    rumahSakit: true,
    infoOksigen: true,
    lokasiVaksinasi: true,
    kasusAktif: "100",
  },
  {
    provinsi: "Bengkulu",
    rumahSakit: true,
    infoOksigen: false,
    lokasiVaksinasi: false,
    kasusAktif: "100",
  },
  {
    provinsi: "Bengkulu",
    rumahSakit: true,
    infoOksigen: false,
    lokasiVaksinasi: false,
    kasusAktif: "100",
  },
  {
    provinsi: "Bengkulu",
    rumahSakit: true,
    infoOksigen: false,
    lokasiVaksinasi: false,
    kasusAktif: "100",
  },
  {
    provinsi: "Bengkulu",
    rumahSakit: true,
    infoOksigen: false,
    lokasiVaksinasi: false,
    kasusAktif: "100",
  },
  {
    provinsi: "Bengkulu",
    rumahSakit: true,
    infoOksigen: false,
    lokasiVaksinasi: false,
    kasusAktif: "100",
  },
  {
    provinsi: "Bengkulu",
    rumahSakit: true,
    infoOksigen: false,
    lokasiVaksinasi: false,
    kasusAktif: "100",
  },
  {
    provinsi: "Bengkulu",
    rumahSakit: true,
    infoOksigen: false,
    lokasiVaksinasi: false,
    kasusAktif: "100",
  },
  {
    provinsi: "Bengkulu",
    rumahSakit: true,
    infoOksigen: false,
    lokasiVaksinasi: false,
    kasusAktif: "100",
  },
  {
    provinsi: "Bengkulu",
    rumahSakit: true,
    infoOksigen: false,
    lokasiVaksinasi: false,
    kasusAktif: "100",
  },
  {
    provinsi: "Bengkulu",
    rumahSakit: true,
    infoOksigen: false,
    lokasiVaksinasi: false,
    kasusAktif: "100",
  },
  {
    provinsi: "Bengkulu",
    rumahSakit: true,
    infoOksigen: false,
    lokasiVaksinasi: false,
    kasusAktif: "100",
  },
  {
    provinsi: "Bengkulu",
    rumahSakit: true,
    infoOksigen: false,
    lokasiVaksinasi: false,
    kasusAktif: "100",
  },
  {
    provinsi: "Bengkulu",
    rumahSakit: true,
    infoOksigen: false,
    lokasiVaksinasi: false,
    kasusAktif: "100",
  },
  {
    provinsi: "Bengkulu",
    rumahSakit: true,
    infoOksigen: false,
    lokasiVaksinasi: false,
    kasusAktif: "100",
  },
  {
    provinsi: "Bengkulu",
    rumahSakit: true,
    infoOksigen: false,
    lokasiVaksinasi: false,
    kasusAktif: "100",
  },
  {
    provinsi: "Bengkulu",
    rumahSakit: true,
    infoOksigen: false,
    lokasiVaksinasi: false,
    kasusAktif: "100",
  },
];

function App() {
  return (
    <>
      <head>
        <meta
          charset="UTF-8"
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>Website Paice</title>
      </head>
      {/* <Header /> */}
      <div class="container">
        {/* <Dropdown /> */}
        <PagePilihProvinsi listProvinsi={DUMMY_LIST_PROVINSI} />
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
