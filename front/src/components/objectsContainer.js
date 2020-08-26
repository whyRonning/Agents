
import {connect} from "react-redux";
import {ChangeFilterVisibleAC} from "../store/ObjectRecucer";
import {Objects} from "./objects";
export const ObjectsContainer=connect(null,{ChangeFilterVisibleAC})(Objects)