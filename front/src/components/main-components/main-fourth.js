import React from "react";
import "./../../css/App.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAt, faMobileAlt} from "@fortawesome/free-solid-svg-icons";

class MainFourth extends React.Component {
    render() {
        return (
            <div className="team" key={this.props.i}>
                <div className="about-team">
                    <h2 className="team-name">
                        {this.props.el.SecondName}&nbsp;
                        {this.props.el.Name}
                    </h2>

                    <h2 className="team-position">{this.props.el.Position}</h2>
                    <p><FontAwesomeIcon icon={faMobileAlt}/> : {this.props.el.Phone}</p>
                    <p><FontAwesomeIcon icon={faAt}/> : {this.props.el.Mail}</p>
                </div>
                <img className="TeamsPhoto" src={this.props.el.Photo} alt=""/>
            </div>
        );
    }
}

export default MainFourth;
