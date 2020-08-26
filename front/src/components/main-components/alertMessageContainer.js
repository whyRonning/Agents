
import {connect} from "react-redux";
import {alertReducerAC} from "../../store/alertReducer";
import AlertMessage from "./alertMessage";
let MapStateToProps=(state)=>({
    isAlertVisible:state.alertReducer.isAlertVisible,
    message:state.alertReducer.message
})
export let AlertContainer=connect(MapStateToProps,{alertReducerAC})(AlertMessage)
