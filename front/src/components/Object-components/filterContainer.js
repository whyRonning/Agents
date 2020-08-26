import {connect} from "react-redux";
import { ChangeObjects} from "../../store/ObjectRecucer";
import {Filter} from "./filter";

export const FilterContainer = connect(null, {ChangeObjects,})(Filter)