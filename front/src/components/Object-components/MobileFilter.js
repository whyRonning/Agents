import React from "react";
import { FindStrokeContainer } from "./FindStrokeContainer";

export const MobileFilter = props => {
  const ChangeObjects = e => {
    props.ChangeObjects(e.target.value, e.target.name);
  };
  return (
    <section className="MobileFilterContainer">
      <div className={props.IsVisible ? "MobileFilterVisible" : "MobileFilter"}>
        <h3>Фильтры</h3>
        <FindStrokeContainer />
        <h5>Цена:</h5>
        <input
          placeholder="От"
          name="lowprice"
          onChange={ChangeObjects}
          className="filterinput"
        />
        <input
          placeholder="До"
          name="highprice"
          onChange={ChangeObjects}
          className="filterinput"
        />
        <h5>Тип недвижимости</h5>
        <div className="typeofobj">
          <input
            type="radio"
            id="typemobileobj1"
            name="typeofobj"
            className="radioType"
            value=""
            onChange={ChangeObjects}
          />
          <label htmlFor="typemobileobj1">Любой</label>
          <input
            type="radio"
            id="typemobileobj2"
            name="typeofobj"
            className="radioType"
            value="apartment"
            onChange={ChangeObjects}
          />
          <label htmlFor="typemobileobj2">Квартира</label>
          <input
            type="radio"
            id="typemobileobj3"
            name="typeofobj"
            className="radioType"
            value="house"
            onChange={ChangeObjects}
          />
          <label htmlFor="typemobileobj3">Дом</label>
        </div>
        <h5>Количество комнат:</h5>
        <input
          className="filterinput"
          placeholder="Количество комнат"
          name="NumberAp"
          value={props.countApp}
          onChange={ChangeObjects}
        />
        <br />
        <button
          onClick={props.ChangeFilterVisibleAC}
          className="acceptButtonFilter"
        >
          Применить
        </button>
      </div>
    </section>
  );
};
