import React from "react";
import {
  FaFacebook,
  FaYoutube,
  FaPinterest,
  FaTwitter,
  FaFilm,
} from "react-icons/fa";
import { GiFilmProjector, GiFilmStrip } from "react-icons/gi";
import { FcFilmReel } from "react-icons/fc";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="col col-1">
          <h3>
            Literatura<span className="primary"> 20 - lecia</span>
          </h3>
        </div>
        <div className="col">
          <h5>Filmy</h5>
          <span className="bar"></span>
          <a
            href="//www.youtube.com/watch?v=---QFkQRTso"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GiFilmProjector />
          </a>
          <a
            href="//www.youtube.com/watch?v=Y0lWls_sna0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFilm />
          </a>
          <a
            href="//www.youtube.com/watch?v=hKljMQb1CSI"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FcFilmReel />
          </a>
          <a
            href="//www.youtube.com/watch?v=53nRu0POQbg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GiFilmStrip />
          </a>
        </div>
        <div className="col">
          <h5>Informacje</h5>
          <span className="bar"> </span>
          <a
            href="//pl.wikipedia.org/wiki/Literatura_polska_%E2%80%93_dwudziestolecie_mi%C4%99dzywojenne"
            target="_blank"
            rel="noopener noreferrer"
          >
            pl.wikipedia.org
          </a>
          <a
            href="//polszczyzna.pl/dwudziestolecie-miedzywojenne-epoki-literackie"
            target="_blank"
            rel="noopener noreferrer"
          >
            polszczyzna.pl
          </a>
          <a
            href="//klp.pl/dwudziestolecie-miedzywojenne/"
            target="_blank"
            rel="noopener noreferrer"
          >
            klp.pl
          </a>
          <a
            href="//opracowania.pl/opracowania/jezyk-polski/dwudziestolecie-miedzywojenne-wprowadzenie,oid,457,literatura-polska-okresu-dwudziestolecia-miedzywojennego"
            target="_blank"
            rel="noopener noreferrer"
          >
            opracowania.pl
          </a>
        </div>
        <div className="col">
          <h5>Radom</h5>
          <p>2021 - {new Date().getFullYear()}.</p>
        </div>
        <div className="col">
          <h5>Social</h5>
          <span className="bar"> </span>
          <a
            href="//pl-pl.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="icon" />
          </a>
          <a href="//twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="icon" />
          </a>
          <a
            href="//pl.pinterest.com/missmoodczyta/dwudziestolecie-mi%C4%99dzywojenne/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPinterest className="icon" />
          </a>
          <a
            href="//www.youtube.com/watch?v=3GswdvxNXaM"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
