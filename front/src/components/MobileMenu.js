import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars,faTimes} from "@fortawesome/free-solid-svg-icons";
import "./../css/App.css"
import ParagraphOfMenu from "./paragraphMenu";
class MobileMenu extends React.Component {
    Update = () => {
        this.props.menuState();
    };
    render() {
        return (
            <div className="mobileMenuBlock">
                <FontAwesomeIcon icon={(!this.props.ismenuState)?faBars:faTimes} onClick={this.Update } />
                <header className={this.props.ismenuState ? "mobilemenu" : "hidemenu"}>
                    <nav>
                        <ul >
                            {this.props.menuDate.map((el, i) => (
                                <ParagraphOfMenu el={el} key={i} />
                            ))}
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}
export default MobileMenu