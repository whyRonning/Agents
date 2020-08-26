import React from "react";
import { NavLink } from "react-router-dom";

export const Object = props => {
  return (
    <div>
      <div className="objDate ">
        <div className="objPlace1">
          Улица {props.street}, дом {props.house}
        </div>
        <div className="objPlace">
          Тип: {props.type === "house" ? "Дом" : "Квартира"}
        </div>
        <div className="countApp">Количество комнат: {props.rooms} </div>
        <div className="areaObjects">Район: {props.district} </div>
        <div className="objCost">
          <span className="priceObj">{props.cost}</span> ₽
        </div>
        <div className="objSize">
          Размер: {props.size}м<sup>2</sup>
        </div>
        <img className="objPhoto" src={props.photo} alt="" />
        <NavLink className="objBtn" to={"objects/" + props.url}>
          <button>Подробнее</button>
        </NavLink>
      </div>
    </div>
  );
};
