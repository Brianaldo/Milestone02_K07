import { useEffect, useState } from "react";
import "./Berita.css";
import BeritaSatuan from "./BeritaSatuan";

const Berita = () => {
  const [dataBerita, setDataBerita] = useState([]);
  useEffect(() => {
    fetch("https://paice-backend.herokuapp.com/berita", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        Feed: "Berita",
      }),
    })
      .then((res) => res.json())
      .then((Data) => {
        setDataBerita(Data.Response);
      });
  }, []);
  return (
    <div className="berita">
      <div className="page-break__container">
        <div className="page-break" />
      </div>
      <h2 style={{textAlign:"center"}}>Berita Covid-19 Terkini</h2>
      {dataBerita.map((elmt) => (
        <a
          href={elmt.URL}
          rel=""
          style={{ textDecoration: "none" }}
          target="_blank"
        >
          <BeritaSatuan judul={elmt.Judul} url={elmt.URL} />
        </a>
      ))}
    </div>
  );
};

export default Berita;
