import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import { AlertContainer } from "./main-components/alertMessageContainer";

export let DataFilling = React.memo(props => {
  let ChangeInputInfoStreetFunc = e => {
    props.ChangeInputInfoStreetAC(e.target.value);
  };
  let ChangeInputInfoHouseFunc = e => {
    props.ChangeInputInfoHouseAC(e.target.value);
  };
  let ChangeInputInfoCostFunc = e => {
    props.ChangeInputInfoCostAC(e.target.value);
  };
  let ChangeInputInfoPassFunc = e => {
    props.ChangeInputInfoPassAC(e.target.value);
  };
  let ChangeInputInfoCountAppFunc = e => {
    props.ChangeInputInfoCountAppAC(e.target.value);
  };
  let ChangeInputInfoNameFunc = e => {
    props.ChangeInputInfoNameAC(e.target.value);
  };
  let ChangeInputInfoTypeFunc = e => {
    props.ChangeInputInfoTypeAC(e.target.value);
  };
  let ChangeInputInfoDistrictFunc = e => {
    props.ChangeInputInfoDistrictAC(e.target.value);
  };
  let ChangeInputInfoSizeFunc = e => {
    props.ChangeInputInfoSizeAC(e.target.value);
  };
  let ChangeInputInfoRoomsFunc = e => {
    props.ChangeInputInfoRoomsAC(e.target.value);
  };
  let imgSendFunc = e => {
    props.ImgSrcClearAC();
    props.ImgCountAC(e.target.files.length);
    props.imgSend(e);
  };
  return (
    <section>
      <AlertContainer />
      <div className="DataFillingBlock">
        <div className="DataFilling">
          <h3>Данные об объекте</h3>
          <input
            placeholder="Улица"
            onChange={ChangeInputInfoStreetFunc}
            value={props.inputInfo.street}
          />
          <input
            placeholder="Номер дома"
            onChange={ChangeInputInfoHouseFunc}
            value={props.inputInfo.house}
          />
          <input
            placeholder="Номер квартиры"
            onChange={ChangeInputInfoCountAppFunc}
            value={props.inputInfo.countApp}
          />
          <div>
            <input
              placeholder="Цена"
              onChange={ChangeInputInfoCostFunc}
              value={props.inputInfo.cost}
            />
            <label>₽</label>
          </div>
          <input
            placeholder="Количество комнат"
            value={props.inputInfo.rooms}
            onChange={ChangeInputInfoRoomsFunc}
          />
          <div>
            <input
              placeholder="Размер объекта"
              value={props.inputInfo.size}
              onChange={ChangeInputInfoSizeFunc}
            />
            <label>
              м<sup>2</sup>
            </label>
          </div>
          <select onChange={ChangeInputInfoDistrictFunc}>
            <option value=" ">Район</option>
            <option>Ленинский</option>
            <option>Советский</option>
            <option>Демский</option>
            <option>Кировский</option>
            <option>Октябрьский</option>
            <option>Орджоникидзевский</option>
            <option>Калининский</option>
          </select>
          <select onChange={ChangeInputInfoTypeFunc}>
            <option value=" ">Тип недвижимости</option>
            <option value="apartment">Квартира</option>
            <option value="house">Дом</option>
          </select>
          <h3>Договор оформлен на:</h3>
          <select className="name" onChange={ChangeInputInfoNameFunc}>
            <option value=" ">Имя</option>
            {props.options}
          </select>
          <h3>Фотографии объекта (Загрузить все разом)</h3>
          <input
            type="file"
            id="file"
            name="photos"
            onChange={imgSendFunc}
            multiple
          />
          <label htmlFor="file" className="label4Files">
            <FontAwesomeIcon icon={faFileUpload} />{" "}
            {props.imgCount === 0
              ? "Выберите файлы"
              : props.imgCount === 1
              ? props.imgCount + " файл"
              : props.imgCount <= 4
              ? props.imgCount + " файла"
              : props.imgCount + " файлов"}
          </label>
          <input
            placeholder="Введите пароль повторно "
            onChange={ChangeInputInfoPassFunc}
            value={props.inputInfo.pass}
          />
          <button onClick={props.sendObjectsInfo}>Отправить</button>
        </div>
      </div>
    </section>
  );
});
