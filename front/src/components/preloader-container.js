
import {connect} from "react-redux";
import {PreloaderAC} from "../store/preloaderReducer";
import {Preloader} from "./preloader";
let MapStateToProps=(state)=>{
    return{
        preloaderState:state.preloaderReducer.isPreloaderVisible
    }
}
export let PreloaderContainer=connect (MapStateToProps,{PreloaderAC})(Preloader)