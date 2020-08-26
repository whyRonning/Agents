import React from "react";
import "./../../css/App.css";
import Main1 from "./../../Images/Main1.jpg";
import HiddenForm from "./hidden-form.js";
import {NavLink} from "react-router-dom";

class MainFirst extends React.Component {

    render() {
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
                        <button id="sell" onClick={this.props.HiddenForm}>Продать</button>
                    </div>
                    <img className="Main1" src={Main1} alt=""/>
                </div>
                <div className={(this.props.IsVisible) ? "visible-form Chagebleform" : "hidden-form Chagebleform"}>
                    <HiddenForm messageChangeAC={this.props.messageChangeAC} HiddenForm={this.props.HiddenForm}
                                alertReducerAC={this.props.alertReducerAC}/>
                </div>
            </section>
        );
    }

}

export default MainFirst;