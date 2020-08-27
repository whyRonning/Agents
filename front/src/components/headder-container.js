import {connect} from "react-redux";

import Header from "./header";


let MapStateToProps = (state) => {
    return {
        headerContainerBlock:state.menuDate.DateAboutMenu
    }
};
let HeaderContainer = connect(MapStateToProps)(Header);

export default HeaderContainer