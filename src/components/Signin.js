import React, { useState } from "react";
import "./Signup.css";
import Modal from "./Portal/Modal";

import img from "../assets/12.jpg";

const Signup = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <div className="signup" id="dramaty">
      <div className="container">
        {/* right */}
        <div className="right">
          <h2>Twórczość dramatyczna</h2>
          <p>
            W dziedzinie dramatu przodowali: Jerzy Szaniawski (Żeglarz, Most,
            Adwokat i róże), Karol Hubert Rostworowski (trylogia: Niespodzianka,
            Przeprowadzka i U mety), Jarosław Iwaszkiewicz, Adolf Nowaczyński,
            Stanisława Przybyszewska, Bruno Jasieński (Bal manekinów) oraz
            Stanisław Ignacy Witkiewicz, którego dramaty Kurka wodna, Jan Maciej
            Wścieklica i inne były w tym okresie na ogół nierozumiane i
            niedoceniane. Popularne komedie pisali m.in.: Antoni Cwojdziński,
            Adam Grzymała-Siedlecki oraz Włodzimierz Perzyński.
          </p>
          <div className="input-container">
            <button className="btn" onClick={() => Toggle()}>
              Więcej
            </button>
          </div>
          <Modal show={modal} close={Toggle} title="Twórczość dramatyczna">
            <p>
              Działalność dramatyczną tego okresy może podzielić zarówno ze
              względu na osoby twórców, jak i na estetykę, którą sobie obrali.
              Trzeba powiedzieć, że w dramacie z tego okresy nie było mocno
              zarysowanych prądów, czy szkół, do których odwoływałaby się grupa
              artystów. Trzeba tu raczej mówić o wielkich indywidualnościach,
              którym bliższe były te, a nie inne nurty w sztuce.
            </p>
            <br />
            <p>
              <em>//www.bryk.pl/wypracowania/jezyk-polski/xx-lecie</em>
            </p>
          </Modal>
        </div>
        {/* left */}
        <div className="left">
          <img src={img} alt="..." />
        </div>
      </div>
    </div>
  );
};

export default Signup;
