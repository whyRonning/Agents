
import {connect} from "react-redux";
import {FindStroke} from "./FindStroke";
import { ChangeObjects} from "../../store/ObjectRecucer";

let MapStateToProps = (state) => {
    return {
        text: state.objReducer.FindStrokeText
    }
}
export const FindStrokeContainer = connect(MapStateToProps, {ChangeObjects})(FindStroke)