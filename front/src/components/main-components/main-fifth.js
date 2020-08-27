import React from "react";
import "./../../css/App.css";
import ScrollableAnchor from "react-scrollable-anchor";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Maps from "./map.js";
import {faEnvelope, faMapMarkerAlt, faPhoneAlt} from "@fortawesome/free-solid-svg-icons";
import {FormContainer} from "./formContainer";

const MainFifth=React.memo((props) =>{
    return (
        <section className="LastBlock">
            <ScrollableAnchor id={"cont"}>
                <h2>Контакты</h2>
            </ScrollableAnchor>
            <div className="MainFifth">
                <div>
                    <FontAwesomeIcon className="icon-cont" icon={faPhoneAlt}/>
                    <p className="text">Телефон</p>
                    <p className="text">+79191425028</p>
                </div>
                <div>
                    <FontAwesomeIcon className="icon-cont" icon={faEnvelope}/>
                    <p className="text">Почта</p>
                    <p className="text">anturazh@gmail.com</p>
                </div>
                <div className="cont-third-icon">
                    <FontAwesomeIcon className="icon-cont" icon={faMapMarkerAlt}/>
                    <div>
                        <p className="text">ул.Коммунистическая 45/3</p>
                        <p className="text">офис 211, 2 этаж, г.Уфа</p>
                    </div>
                </div>
            </div>
            <FormContainer alertReducerAC={props.alertReducerAC} messageChangeAC={props.messageChangeAC}/>
            <Maps/>
        </section>
    );

});

export default MainFifth;

