let objData = {
    FindStrokeText: "",
    Objects: [],
    typeObj: "",
    numAp: "",
    currentObjectPPId: {id: "5e6a101e1c9d4400008227c3"},
    currentObjectPP: [],
    teamDate:[],
    price: [1, 999999999999],
    CurrentObjects: [],
    selectedImg: 0,
    isFilterVisible:false
};
export const objReducer = (state = objData, action) => {
    switch (action.type) {
        case "ChangeSelectedImgToZero":
            return {...state,selectedImg: 0};
        case "ChangeFindStroke":
            return {...state, FindStrokeText: action.text};
        case "ChangeFilterVisible":
            return {...state,isFilterVisible: !state.isFilterVisible};
        case "ChangeSelectedImg":{
            if (state.selectedImg+action.value+1>state.currentObjectPP.imgSrc.length) {
                return {...state, selectedImg: 0}
            }else if (state.selectedImg+action.value<0){
                return {...state, selectedImg: state.currentObjectPP.imgSrc.length-1}
        }else{
                return {...state, selectedImg:state.selectedImg+action.value}
            }
        }
        case "GetObject":
            let copyState = {...state};
            copyState.Objects = action.obj;
            copyState.CurrentObjects = action.obj;
            return {...copyState};
        case "GetPersonalObject":
            return {...state, currentObjectPP: action.obj};
        case "GetObjPPIdAC":
            return {...state,currentObjectPPId:{id:action.id}};
        case "ChangeObjects":
            switch (action.name) {
                case "find":
                    let copyStateFind = {
                        ...state,
                        CurrentObjects: state.Objects
                            .filter(f => f.street.toLowerCase().includes(action.text.toLowerCase()))
                            .filter(f => f.type.toLowerCase().includes((!state.typeObj) ? f.type.toLowerCase() : state.typeObj.toLowerCase()))
                            .filter(f => Number(f.rooms) === ((Number(state.numAp) ? Number(state.numAp) : f.rooms)))
                            .filter(f => Number(f.cost) >= ((Number(state.price[0]) ? Number(state.price[0]) : f.cost)))
                            .filter(f => Number(f.cost) <= ((Number(state.price[1]) ? Number(state.price[1]) : f.cost)))
                    };
                    return {...copyStateFind, FindStrokeText: action.text};
                case "typeofobj":
                    let copyStateChoose = {
                        ...state,
                        CurrentObjects: state.Objects
                            .filter(f => f.street.toLowerCase().includes((state.FindStrokeText) ? state.FindStrokeText.toLowerCase() : f.street.toLowerCase()))
                            .filter(f => f.type.toLowerCase().includes(action.text))
                            .filter(f => Number(f.rooms) === ((Number(state.numAp) ? Number(state.numAp) : f.rooms)))
                            .filter(f => Number(f.cost) >= ((Number(state.price[0]) ? Number(state.price[0]) : f.cost)))
                            .filter(f => Number(f.cost) <= ((Number(state.price[1]) ? Number(state.price[1]) : f.cost)))
                    };
                    return {...copyStateChoose, typeObj: action.text};
                case "NumberAp":
                    let copyStateAp = {
                        ...state,
                        CurrentObjects: state.Objects
                            .filter(f => f.street.toLowerCase().includes((state.FindStrokeText) ? state.FindStrokeText.toLowerCase() : f.street.toLowerCase()))
                            .filter(f => f.type.toLowerCase().includes((!state.typeObj) ? f.type.toLowerCase() : state.typeObj.toLowerCase()))
                            .filter(f => Number(f.rooms) === ((Number(action.text) ? Number(action.text) : f.rooms)))
                            .filter(f => Number(f.cost) >= ((Number(state.price[0]) ? Number(state.price[0]) : f.cost)))
                            .filter(f => Number(f.cost) <= ((Number(state.price[1]) ? Number(state.price[1]) : f.cost)))

                    };
                    return {...copyStateAp, numAp: action.text};
                case "lowprice":
                    let copyStateLowPrice = {
                        ...state,
                        CurrentObjects: state.Objects
                            .filter(f => f.street.toLowerCase().includes((state.FindStrokeText) ? state.FindStrokeText.toLowerCase() : f.street.toLowerCase()))
                            .filter(f => f.type.toLowerCase().includes((!state.typeObj) ? f.type.toLowerCase() : state.typeObj.toLowerCase()))
                            .filter(f => Number(f.cost) >= ((Number(action.text) ? Number(action.text) : f.cost)))
                            .filter(f => Number(f.cost) <= ((Number(state.price[1]) ? Number(state.price[1]) : f.cost)))
                            .filter(f => Number(f.rooms) === ((Number(state.numAp) ? Number(state.numAp) : f.rooms)))
                    };
                    return {...copyStateLowPrice, price: [Number(action.text), state.price[1]]};
                case "highprice":
                    let copyStateHighPrice = {
                        ...state,
                        CurrentObjects: state.Objects
                            .filter(f => f.street.toLowerCase().includes((state.FindStrokeText) ? state.FindStrokeText.toLowerCase() : f.street.toLowerCase()))
                            .filter(f => f.type.toLowerCase().includes((!state.typeObj) ? f.type.toLowerCase() : state.typeObj.toLowerCase()))
                            .filter(f => Number(f.cost) <= ((Number(action.text) ? Number(action.text) : f.cost)))
                            .filter(f => Number(f.cost) >= ((Number(state.price[0]) ? Number(state.price[0]) : f.cost)))
                            .filter(f => Number(f.rooms) === ((Number(state.numAp) ? Number(state.numAp) : f.rooms)))
                    };
                    return {...copyStateHighPrice, price: [state.price[0], Number(action.text)]};

                default:
                    return state
            }
        default:
            return state
    }
};
export const ChangeObjects = (text, name) => ({
    type: "ChangeObjects",
    text,
    name
});
export const GetObjectsAC = (obj) => ({
    type: 'GetObject',
    obj
});
export const GetObjPPAC = (obj) => ({
    type: "GetPersonalObject",
    obj
});
export const GetObjPPIdAC = (id) => ({
    type: "GetObjPPIdAC",
    id
});
export const ChangeSelectedImgAC=(value)=>({
    type:"ChangeSelectedImg",
    value
});
export const ChangeFilterVisibleAC=()=>({
    type:"ChangeFilterVisible"
});
export const ChangeSelectedImgToZeroAC=()=>({
    type:"ChangeSelectedImgToZero"
});
