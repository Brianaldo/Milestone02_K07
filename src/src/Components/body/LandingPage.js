import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import bg from "./LandingPage/bg.png";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="deskripsi-landing">
        <h2>Wujudkan Indonesia Sehat dan Informatif</h2>
        <p>
          Paice membantu Anda mendapatkan informasi mengenai pandemi yang aktual
          dan terkini
        </p>
      </div>
      <div className="button-landing">
        <Link to="/kategori">
          <button id="telusuri-button">CEK DI SINI</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
