import React, { useState } from "react";
import "./Signup.css";
import img from "../assets/11.jpg";
import Modal from "./Portal/Modal";

const Signup = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <div className="signup" id="proza">
      <div className="container">
        {/* left */}
        <div className="left">
          <img src={img} alt="..." />
        </div>
        {/* right */}
        <div className="right">
          <h2>Najważniejsze utwory prozatorskie tego okresu to:</h2>
          <p>
            <b>"Przedwiośnie"</b> Stefana Żeromskiego
          </p>
          <p>
            <b>"Granica"</b> Zofii Nałkowskiej
          </p>
          <p>
            <b>"Ferdydurke"</b> Witolda Gombrowicza
          </p>
          <p>
            <b>"Cudzoziemka"</b> Marii Kuncewiczowej
          </p>
          <p>
            <b>"Sklepy cynamonowe"</b> Brunona Schulza
          </p>
          <p>
            Jeśli chodzi o literaturę światową, przede wszystkim trzeba pamiętać
            o <b>"Procesie"</b> Franza Kafki. Z kolei w przypadku dramatu nie
            można zapominać o <b>"Szewcach"</b> Stanisława Ignacego Witkiewicza.
          </p>
          <div className="input-container">
            <button className="btn" onClick={() => Toggle()}>
              Więcej
            </button>
          </div>
          <Modal show={modal} close={Toggle} title="Nowe tendencje w powieści">
            <p>
              Podróż w głąb psychiki ludzkiej – bodziec do wszelkich
              eksperymentów prozatorskich, których efektem będą narodziny
              powieści strumienia świadomości.
            </p>
            <p>
              Wielka proza Thomasa Manna – niemieckiego noblisty, autora dzieł
              takich jak Czarodziejska góra, Buddenbrookowie, Doktor Faustus
              (symbol, intelektualizm, uniwersalizm).
            </p>
            <br />
            <p>
              <em>
                //aleklasa.pl/liceum/c155-powtorka-z-epok-literackich/c166-dwudziestolecie
              </em>
            </p>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Signup;
