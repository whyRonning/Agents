import React from "react"
import {NavLink} from "react-router-dom";
import Logo from "./../Images/logo.png"

const ParagraphOfMenu=React.memo((props)=>{
    if (props.el.Symbol === "#") {
        return (
            <li id={"menu" + props.el.Src}>
                <a href={"/" + props.el.Symbol + props.el.Src}>{props.el.Name}</a>
            </li>
        );
    } else if (props.el.Symbol === "img") {
        return (
            <li className="logo"><img id="logo" src={Logo} alt=""/></li>
        )
    } else {
        return (
            <li id={"menu" + props.el.Src}>
                <NavLink to={props.el.Symbol + props.el.Src}>{props.el.Name}</NavLink>
            </li>
        );
    }
});

export default ParagraphOfMenu;