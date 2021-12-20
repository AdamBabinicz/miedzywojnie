import React, { useState } from "react";
import "./Hero.css";
import img from "../assets/3.jpg";
import img1 from "../assets/2.jpg";
import Modal from "./Portal/Modal";

const Hero = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <div className="hero" id="start">
      <div className="container">
        {/* Left Side */}
        <div className="left">
          <p>Guillaume Apollinaire</p>
          <h2>Awangarda poetycka</h2>
          <p>
            Twórcy awangardy głosili swobodny tok obrazowania i wprowadzili do
            poezji prozaizmy. Pojawiły się wiersze obrazkowe (np. wiersz w
            kształcie wieży Eiffla).
          </p>
          <br />
          <br />
          <p>André Breton</p>
          <h2>Surrealizm (Nadrealizm)</h2>
          <p>
            Nadrealizm zakładał odrzucenie racjonalizmu i empiryzmu, a także
            tradycji. Dzieło powinno powstawać na podstawie działania wyobraźni,
            być efektem marzeń, snów, halucynacji, a sztuka ma wyrażać treści
            spoza świadomości. Surrealizm w malarstwie reprezentował Salvador
            Dali.
          </p>
          <br />
          <br />
          <p>Paul Válery</p>
          <h2>Neoklasycyzm</h2>
          <p>
            Forma utworów budowana była według klasycznych wzorców, a treści
            odwoływały się do filozofii, problematyki moralnej.
          </p>
          <div className="input-container">
            <button className="btn" onClick={() => Toggle()}>
              Więcej
            </button>
          </div>
          <Modal show={modal} close={Toggle} title="Międzywojnie i filozofia">
            <p>
              Dwadzieścia lat między dwiema wojnami światowymi to nie tylko czas
              ogromnego rozwoju cywilizacyjnego, mediatyzacji i demokratyzacji
              społeczeństwa, unowocześnienia technicznego, wzrostu roli kobiet,
              czy rewolucyjnych teorii naukowych Einsteina i Freuda.
            </p>
            <p>
              Na literaturę znaczący wpływ miały rozwijające się filozofie:
              Behawioryzm, Freudyzm, Egzystencjalizm, Pragmatyzm, Katastrofizm
            </p>
            <p>
              Znany historyk literatury Andrzej Zawadzki stwierdził w swej
              syntezie epoki: "Nigdy przedtem i nigdy potem nie zdarzył się w
              polskiej kulturze fenomen tak bujnego życia literackiego."
            </p>
            <br />
            <p>
              <em>//klp.pl/dwudziestolecie-miedzywojenne</em>
            </p>
          </Modal>
        </div>
        {/* Right Side */}
        <div className="right">
          <div className="img-container">
            <img src={img} alt="..." />
            <img src={img1} alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
