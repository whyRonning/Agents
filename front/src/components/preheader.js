import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faVk} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";

const Preheader=React.memo(()=>{
    return (
        <div className="preheader">
            <a className="preheader-icon-block" href="tel:+19935151214">
                <FontAwesomeIcon className="icons" icon={faPhone} rotation={90} size="1x"/>
                <p>+19935151214</p>
            </a>
            <a className="preheader-icon-block" href="mailto:anturazhcompany@gmail.com">
                <FontAwesomeIcon className="icons" icon={faEnvelope} size="1x"/>
                <p>anturazhcompany@gmail.com</p>
            </a>
            <nav className="social">
                <a className="preheader-icon-block" href="https://www.google.com">
                    <FontAwesomeIcon className="icons" icon={faFacebook} size="1x"/>
                </a>
                <a className="preheader-icon-block" href="https://www.google.com">
                    <FontAwesomeIcon className="icons" icon={faVk}/>
                </a>
                <a className="preheader-icon-block" href="https://www.google.com">
                    <FontAwesomeIcon className="icons" icon={faInstagram}/>
                </a>
            </nav>
        </div>
    );
});

export default Preheader;
