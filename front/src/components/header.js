import React from "react";
import "./../css/App.css";
import ParagraphOfMenu from "./paragraphMenu";

const Header=React.memo((props)=> {
    return (
        <header>
            <nav>
                <ul className="menu">
                    {props.headerContainerBlock.map((el, i) => (<ParagraphOfMenu el={el} key={i}/>))}
                </ul>
            </nav>
        </header>
    );
});

export default Header;
