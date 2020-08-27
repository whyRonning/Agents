import React from "react";
import "./../../css/App.css";
import Main1 from "./../../Images/Main1.jpg";
import HiddenForm from "./hidden-form.js";
import {NavLink} from "react-router-dom";

const MainFirst=React.memo((props)=>{
    return (
        <section>
            <div className="firstMain">
                <div className="cover"/>
                <div className="firstMain-block">
                    <h1>Нужно купить или продать недвижимость</h1>
                    <p>Мы поможем вам быстро и эффективно</p>
                    <NavLink to="/objects">
                        <button id="buy">Купить</button>
                    </NavLink>
                    <button id="sell" onClick={props.HiddenForm}>Продать</button>
                </div>
                <img className="Main1" src={Main1} alt=""/>
            </div>
            <div className={(props.IsVisible) ? "visible-form Chagebleform" : "hidden-form Chagebleform"}>
                <HiddenForm messageChangeAC={props.messageChangeAC} HiddenForm={props.HiddenForm}
                            alertReducerAC={props.alertReducerAC}/>
            </div>
        </section>
    );
});

export default MainFirst;