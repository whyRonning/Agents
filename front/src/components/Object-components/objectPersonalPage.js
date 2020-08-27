import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faCoins,
  faPhoneAlt,
  faUser
} from "@fortawesome/free-solid-svg-icons";

export const PersonalPage = React.memo(props => {
  return (
    <section className="objPP">
      <div className="selectedImgLargeBlock">
        <div style={{backgroundImage: "url(" + props.currentObjectPP.imgSrc[props.selectedImg] + ")"}} className="selectedImgLargeContainer"/>
        <FontAwesomeIcon onClick={props.PrevPhoto} icon={faAngleLeft} />
        <FontAwesomeIcon onClick={props.NextPhoto} icon={faAngleRight} />
        <img className="selectedImgLarge" src={props.currentObjectPP.imgSrc[props.selectedImg]} alt=""/>
      </div>
      <div className="aboutObjPP">
        <div className="infoAboutObjPP">
          <h3>{props.currentObjectPP.street} {props.currentObjectPP.house}, кв.{" "}{props.currentObjectPP.countApp}</h3>
          <p>Размер: {props.currentObjectPP.size}м<sup>2</sup></p>
          <p>Количество комнат: {props.currentObjectPP.rooms}</p>
          <p>Район: {props.currentObjectPP.district}</p>
          <p>Тип: {props.currentObjectPP.type === "house" ? " Дом" : " Квартира"}</p>
        </div>
        <div className="SecondAboutObjPP">
          <FontAwesomeIcon icon={faCoins} />
          <h3>{props.currentObjectPP.cost} ₽</h3>
          <FontAwesomeIcon icon={faPhoneAlt} />
          <a href={"tel:" + props.currentObjectPP.phone}>
            {" "}
            <button>{props.currentObjectPP.phone} </button>
          </a>
          <FontAwesomeIcon icon={faUser} />
          <p>
            {" "}
            {props.currentObjectPP.name}
            {props.currentObjectPP.secondName}{" "}
          </p>
        </div>
      </div>
      <div className="miniGallery">{props.miniGallery}</div>
    </section>
  );
});
