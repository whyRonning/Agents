import {connect} from "react-redux";
import {ChangeFilterVisibleAC, ChangeObjects} from "../../store/ObjectRecucer";
import {MobileFilter} from "./MobileFilter";
let MapStateToProps=(state)=>{
    return {
        IsVisible:state.objReducer.isFilterVisible
    }
}
export const FilterMobileContainer = connect(MapStateToProps, {ChangeObjects,ChangeFilterVisibleAC})(MobileFilter)