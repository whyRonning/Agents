import { connect } from "react-redux";
import MobileMenu from "./MobileMenu";
import {menuState} from "../store/menuDate";

let MapStateToProps = state => {
    return {
        menuDate: state.menuDate.DateAboutMenu,
        ismenuState: state.menuDate.isMenuVisible
    };
};
let MobileMenuContainer = connect(
    MapStateToProps,
    {menuState}
)(MobileMenu);
export default MobileMenuContainer;
