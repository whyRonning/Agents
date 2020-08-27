import {connect} from "react-redux";

import MainFifth from "./main-fifth";
import {alertReducerAC, messageChangeAC} from "../../store/alertReducer";

let MapStateToProps=(state)=>{
    return {

        realtorsDate:state.realtorsDate.teamDate
    }
};
let MainFifthContainer = connect(MapStateToProps,{alertReducerAC,messageChangeAC})(MainFifth);

export default MainFifthContainer