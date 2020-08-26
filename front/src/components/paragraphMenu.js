import React from "react"
import {NavLink} from "react-router-dom";
import Logo from "./../Images/logo.png"

class ParagraphOfMenu extends React.Component {

    render(props) {
        if (this.props.el.Symbol === "#") {
            return (
                <li id={"menu" + this.props.el.Src}>
                    <a href={"/" + this.props.el.Symbol + this.props.el.Src}>{this.props.el.Name}</a>
                </li>
            );
        } else if (this.props.el.Symbol === "img") {
            return (
                <li className="logo">
                    <img id="logo" src={Logo} alt=""/>
                </li>
            )
        } else {
            return (
                <li id={"menu" + this.props.el.Src}>
                    <NavLink to={this.props.el.Symbol + this.props.el.Src}>{this.props.el.Name}</NavLink>
                </li>
            );
        }
    }
}

export default ParagraphOfMenu;