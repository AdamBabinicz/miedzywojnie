import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import Modal from "./Portal/Modal";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <div className="header">
      <div className="container">
        <h1>
          Literatura <span className="primary">20&nbsp;-&nbsp;lecia</span>
        </h1>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li onClick={handleClick}>
            <a href="#start">Start</a>
          </li>
          <li onClick={handleClick}>
            <a href="#ugrupowania">Ugrupowania</a>
          </li>
          <li onClick={handleClick}>
            <a href="#proza">Proza</a>
          </li>
          <li onClick={handleClick}>
            <a href="#dramaty">Dramaty</a>
          </li>
        </ul>
        <div className="btn-group">
          <button className="btn" onClick={() => Toggle()}>
            Więcej
          </button>
        </div>
        <Modal show={modal} close={Toggle} title="Międzywojnie">
          <p>
            Proza polska dwudziestolecia międzywojennego w swoim początkowym
            okresie była zdominowana przez pisarzy, którzy debiutowali jeszcze w
            epoce Młodej Polski, takimi jak: Stefan Żeromski (Przedwiośnie),
            Wacław Berent, Władysław Orkan, Andrzej Strug (Pokolenie Marka
            Świdy) oraz Władysław Stanisław Reymont, który w 1924 otrzymał
            Literacką Nagrodę Nobla. Pełnię talentu w tym okresie rozwinęli:
            Zofia Nałkowska (m.in. Granica), Juliusz Kaden-Bandrowski (Czarne
            Skrzydła, Generał Barcz), Maria Dąbrowska (m.in. Noce i dnie),
            Jarosław Iwaszkiewicz (m.in. Młyn nad Utratą), Maria Kuncewiczowa
            (Cudzoziemka), Pola Gojawiczyńska (Dziewczęta z Nowolipek), Jan
            Parandowski (Niebo w płomieniach) i wielu innych.
          </p>
          <br />
          <p>
            <em>
              pl.wikipedia.org/wiki/Literatura_polska_-_dwudziestolecie_międzywojenne
            </em>
          </p>
        </Modal>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#333" }} />
          ) : (
            <FaBars size={20} style={{ color: "#333" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
