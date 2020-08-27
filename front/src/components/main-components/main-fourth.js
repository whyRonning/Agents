import React from "react";
import "./../../css/App.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAt, faMobileAlt} from "@fortawesome/free-solid-svg-icons";

const MainFourth=React.memo((props)=> {
    return (
        <div className="team" key={props.i}>
            <div className="about-team">
                <h2 className="team-name">
                    {props.el.SecondName}&nbsp;
                    {props.el.Name}
                </h2>

                <h2 className="team-position">{props.el.Position}</h2>
                <p><FontAwesomeIcon icon={faMobileAlt}/> : {props.el.Phone}</p>
                <p><FontAwesomeIcon icon={faAt}/> : {props.el.Mail}</p>
            </div>
            <img className="TeamsPhoto" src={props.el.Photo} alt=""/>
        </div>
    );
});

export default MainFourth;
