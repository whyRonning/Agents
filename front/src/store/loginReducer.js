let data={
    IsAuthenticated:false,
    teamDate:[],
    inputInfo:{size:"",district:"",type:"",pass:"",ImgSrc:[],cost:"",countApp:"",name:"",secondName:"",phone:"",rooms:"",street:"",house:""},
    imgCount:0
};
export const loginReducer=(state=data,action)=>{
    switch (action.type) {
        case "ChangeInputInfoType":
            let copyState={...state};
            copyState.inputInfo={...state.inputInfo};
            copyState.inputInfo.type=action.t;
            return {...copyState};
        case "ChangeInputInfoDistrict":{
            let copyState={...state};
            copyState.inputInfo={...state.inputInfo};
            copyState.inputInfo.district=action.district
            return {...copyState}
        }
        case "ChangeInputInfoSize":{
            if (Number(action.size)|| action.size==="" ){
                let copyState = {...state};
                copyState.inputInfo = {...state.inputInfo};
                copyState.inputInfo.size=action.size;
                return {...copyState};
            }else {
                return state
            }
        }

        case "ChangeInputInfoName":{
            let copyState={...state};
            copyState.inputInfo={...state.inputInfo};
            copyState.teamDate.forEach((e)=>{
                if (e.Phone===action.phone){
                    copyState.inputInfo.name=e.Name;
                    copyState.inputInfo.phone=e.Phone;
                    copyState.inputInfo.secondName=e.SecondName;
                }
                }
            );
            return {...copyState};
        }
        case "ChangeInputInfoPass": {
            let copyState = {...state};
            copyState.inputInfo = {...state.inputInfo};
            copyState.inputInfo.pass = action.pass;
            return {...copyState};
        }
        case "ChangeInputInfoCost":{
            if (Number(action.cost)|| action.cost==="" ){
                let copyState = {...state};
                copyState.inputInfo = {...state.inputInfo};
                copyState.inputInfo.cost=action.cost;
                return {...copyState};
            }else {
                return state
            }
        }
        case "ChangeInputInfoRooms":{
            if (Number(action.rooms)|| action.rooms==="" ){
                let copyState = {...state};
                copyState.inputInfo = {...state.inputInfo};
                copyState.inputInfo.rooms=action.rooms;
                return {...copyState};
            }else {
                return state
            }
        }
        case "ChangeInputInfoStreet":{
            let copyState={...state};
            copyState.inputInfo={...state.inputInfo};
            copyState.inputInfo.street=action.street;
            return {...copyState};
        }
        case "ChangeInputInfoCountApp":{
            if (Number(action.countApp)|| action.countApp==="" ){
                let copyState = {...state};
                copyState.inputInfo = {...state.inputInfo};
                copyState.inputInfo.countApp=action.countApp;
                return {...copyState};
            }else {
                return state
            }
        }

        case "ChangeInputInfoHouse":{
                let copyState = {...state};
                copyState.inputInfo = {...state.inputInfo};
                copyState.inputInfo.house=action.house;
                return {...copyState};
        }
        case "TeamDateChange":
            return {...state,teamDate: action.team};
        case "ImgSrcChange":
            let CopyState={...state};
            if (CopyState.inputInfo.ImgSrc){
                CopyState.inputInfo.ImgSrc=state.inputInfo.ImgSrc;
                CopyState.inputInfo.ImgSrc.push(action.text);
            }else {
                CopyState.inputInfo.ImgSrc=[action.text]
            }
            return {...CopyState};
        case "ImgSrcClear":
            return {...state,ImgSrc:[]};
        case "ImgCount":
            return {...state,imgCount:action.num};
        default:
            return state;
    }
};
export const ImgSrcChangeAC=(text)=>({
    type:"ImgSrcChange",
    text
});
export const TeamDateChangeAC=(team)=>({
    type:"TeamDateChange",
    team
});
export const ImgSrcClearAC=()=>({
    type:"ImgSrcClear"
});

export const ChangeInputInfoNameAC=(phone)=>({
    type:"ChangeInputInfoName",
    phone
});
export const ChangeInputInfoTypeAC=(t)=>({
    type:"ChangeInputInfoType",
    t
});
export const ChangeInputInfoPassAC=(pass)=>({
    type:"ChangeInputInfoPass",
    pass
});
export const ChangeInputInfoStreetAC=(street)=>({
    type:"ChangeInputInfoStreet",
    street
});
export const ChangeInputInfoCostAC=(cost)=>({
    type:"ChangeInputInfoCost",
    cost
});
export const ChangeInputInfoHouseAC=(house)=>({
    type:"ChangeInputInfoHouse",
    house
});
export const ChangeInputInfoCountAppAC=(countApp)=>({
    type:"ChangeInputInfoCountApp",
    countApp
});
export const ChangeInputInfoRoomsAC=(rooms)=>({
    type:"ChangeInputInfoRooms",
    rooms
});
export const ChangeInputInfoSizeAC=(size)=>({
    type:"ChangeInputInfoSize",
    size
});
export const ChangeInputInfoDistrictAC=(district)=>({
    type:"ChangeInputInfoDistrict",
    district
});
export const ImgCountAC=(num)=>({
    type:'ImgCount',
    num
})