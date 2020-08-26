
import {connect} from "react-redux";
import MainFirst from "./main-first";
import {
    HiddenForm
} from "../../store/hiddenFormState";
import {alertReducerAC, messageChangeAC} from "../../store/alertReducer";

let MapStateToProps=state=>{
    return{
        IsVisible:state.FormState.isFormVisible
    }
}
let MainFirstContainer = connect(MapStateToProps, {HiddenForm,alertReducerAC,messageChangeAC})(MainFirst)

export default MainFirstContainer