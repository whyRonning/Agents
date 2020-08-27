import React from "react";
import { FindStrokeContainer } from "./FindStrokeContainer";

export const Filter = React.memo(props => {
  const ChangeObjects = e => {
    props.ChangeObjects(e.target.value, e.target.name);
  };
  return (
    <section className="Filter">
      <h3>Фильтры</h3>
      <FindStrokeContainer />
      <h5>Цена:</h5>
      <input placeholder="От" name="lowprice" onChange={ChangeObjects} className="filterinput"/>
      <input placeholder="До" name="highprice" onChange={ChangeObjects} className="filterinput"/>
      <h5>Тип недвижимости</h5>
      <div className="typeofobj">
        <input type="radio" id="typeobj1" name="typeofobj" className="radioType" value="" onChange={ChangeObjects}/>
        <label htmlFor="typeobj1">Любой</label>
        <input type="radio" id="typeobj2" name="typeofobj" className="radioType" value="apartment" onChange={ChangeObjects}/>
        <label htmlFor="typeobj2">Квартира</label>
        <input type="radio" id="typeobj3" name="typeofobj" className="radioType" value="house" onChange={ChangeObjects}/>
        <label htmlFor="typeobj3">Дом</label>
      </div>
      <h5>Количество комнат:</h5>
      <input className="filterinput" placeholder="Количество комнат" name="NumberAp" value={props.countApp} onChange={ChangeObjects}/>
    </section>
  );
});
