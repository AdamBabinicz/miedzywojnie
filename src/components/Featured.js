import React, { useState } from "react";
import "./Featured.css";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import img from "../assets/1.jfif";
import img1 from "../assets/7.jpg";
import img2 from "../assets/2.jfif";
import img3 from "../assets/8.jpg";
import img4 from "../assets/9.jpg";
import img5 from "../assets/6.jpg";
import Modal from "./Portal/Modal";

const Featured = () => {
  // const [data, setData] = useState(null);
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <div className="featured" id="ugrupowania">
      <div className="container">
        {/* Left */}
        <div className="left">
          <h2>Ugrupowania poetyckie w Polsce</h2>
          <p>
            Literatura dwudziestolecia międzywojennego powstawała w
            specyficznych warunkach historycznych. Przemiany zachodzące w niej
            ilustrują rozwój cywilizacyjny Polski i ówczesnego świata.
          </p>
          <button className="btn" onClick={() => Toggle()}>
            Więcej
          </button>
          <Modal show={modal} close={Toggle} title="Hasła epoki">
            <p>Zobaczyć świat inaczej!</p>
            <p>
              Odrzucić naśladownictwo, odtwarzanie – tworzyć świat od nowa, po
              swojemu układać i komponować jego elementy!
            </p>
            <p>
              Niech atelier artysty będzie swoistym laboratorium, a twórca
              kreatorem!
            </p>
            <p>
              Nie ma jednego wzorca piękna – dzieła obłąkanych, prymitywnych
              plemion czy dzieci to też sztuka, bo to ich widzenie świata.
            </p>
            <br />
            <p>
              <em>
                //aleklasa.pl/liceum/c155-powtorka-z-epok-literackich/c166-dwudziestolecie
              </em>
            </p>
          </Modal>
        </div>
        {/* Right */}
        <div className="right">
          <div className="top">
            <img src={img} alt="..." />
          </div>
          <div>
            <h5>Skamander</h5>
            <p>
              Do grupy należeli: Julian Tuwim, Jan Lechoń, Antoni Słonimski,
              Jarosław Iwaszkiewicz, Kazimierz Wierzyński. Z kręgu Skamandra
              wywodzi się także poezja Marii Pawlikowskiej-Jasnorzewskiej i
              Kazimiery Iłłakowiczówny.
            </p>
          </div>
          <span>
            <FiArrowUpRight />
            1918-1939
          </span>
        </div>
        <div className="right">
          <div className="top">
            <img src={img1} alt="..." />
          </div>
          <div>
            <h5>Awangarda Krakowska</h5>
            <p>
              Jej ojcem był Tadeusz Peiper, wydawca pisma „Zwrotnica”. Razem z
              nim ugrupowanie to tworzyli: Julian Przyboś, Jalu Kurek, Jan
              Brzękowski i Adam Ważyk.
            </p>
          </div>
          <span>
            <FiArrowUpRight />
            1922-1927
          </span>
        </div>
        <div className="right">
          <div className="top">
            <img src={img2} alt="..." />
          </div>
          <div>
            <h5>Futuryści</h5>
            <p>
              W Polsce poezję futurystyczną tworzyli: Bruno Jasieński,
              Aleksander Wat, Stanisław Młodożeniec, Anatol Stern.
            </p>
          </div>
          <span>
            <FiArrowUpRight />
            1919-1921
          </span>
        </div>
        <div className="right">
          <div className="top">
            <img src={img3} alt="..." />
          </div>
          <div>
            <h5>Żagary</h5>
            <p>
              Należeli do niej m.in. Czesław Miłosz, Teodor Bujnicki, Jerzy
              Putrament, Jerzy Zagórski, Adam Rymkiewicz. W twórczości
              wileńskiej grupy poetyckiej wyrażał się przede wszystkim
              katastrofizm.
            </p>
          </div>
          <span>
            <FiArrowUpRight />
            1931-1934
          </span>
        </div>
        <div className="right">
          <div className="top">
            <img src={img4} alt="..." />
          </div>
          <div>
            <h5>Druga Awangarda (Reflektor)</h5>
            <p>
              Grupa ta przyjęła od Awangardy Krakowskiej poetykę skrótu i
              kondensacji znaczeń. Uznała tematy tradycyjne w poezji (piękno
              pejzażu, tematyka wiejska), krytykowała model poetycki Skamandra.
              Główni przedstawiciele to Józef Czechowicz oraz Józef Łobodowski.
            </p>
          </div>
          <span>
            <FiArrowUpRight />
            1927-1939
          </span>
        </div>
        <div className="right">
          <div className="top">
            <img src={img5} alt="..." />
          </div>
          <div>
            <h5>Czartak</h5>
            <p>
              Grupa ta przyjęła od Awangardy Krakowskiej poetykę skrótu i
              kondensacji znaczeń. Uznała tematy tradycyjne w poezji (piękno
              pejzażu, tematyka wiejska), krytykowała model poetycki Skamandra.
              Główny przedstawiciel to Emil Zegadłowicz. Do grupy należeli
              m.in.: Edward Kozikowski, Jan Nepomucen Miller, Tadeusz Szantroch,
              Janina Brzostowska, Zofia Kossak-Szczucka, Jan Wiktor.
            </p>
          </div>
          <span>
            <FiArrowUpRight />
            1922-1928
          </span>
        </div>
      </div>
    </div>
  );
};

export default Featured;
