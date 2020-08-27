import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars,faTimes} from "@fortawesome/free-solid-svg-icons";
import "./../css/App.css"
import ParagraphOfMenu from "./paragraphMenu";

const MobileMenu=React.memo((props)=>{
    let Update = () => {props.menuState();};

        return (
            <div className="mobileMenuBlock">
                <FontAwesomeIcon icon={(!props.ismenuState)?faBars:faTimes} onClick={Update } />
                <header className={props.ismenuState ? "mobilemenu" : "hidemenu"}>
                    <nav>
                        <ul >{props.menuDate.map((el, i) => (<ParagraphOfMenu el={el} key={i} />))}</ul>
                    </nav>
                </header>
            </div>
        );
})
export default MobileMenu