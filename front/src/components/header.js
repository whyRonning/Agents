import React from "react";
import "./../css/App.css";
import ParagraphOfMenu from "./paragraphMenu";

class Header extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <ul className="menu">
                        {this.props.headerContainerBlock.map((el, i) => (<ParagraphOfMenu el={el} key={i}/>))}
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
