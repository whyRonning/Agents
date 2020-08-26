import React from "react"
import {useEffect} from "react"
import {connect} from "react-redux";
import {DataFilling} from "./DataFilling";
import {PostImg,useObjects, useHTTP} from "../store/api";
import {
    ChangeInputInfoCostAC, ChangeInputInfoCountAppAC, ChangeInputInfoHouseAC, ChangeInputInfoNameAC,
    ChangeInputInfoRoomsAC, ChangeInputInfoStreetAC, ChangeInputInfoTypeAC, ChangeInputInfoPassAC,
    ImgSrcChangeAC,
    ImgSrcClearAC,
    TeamDateChangeAC, ImgCountAC, ChangeInputInfoSizeAC, ChangeInputInfoDistrictAC
} from "../store/loginReducer";
import {PreloaderAC} from "../store/preloaderReducer";
import {alertReducerAC,messageChangeAC} from "../store/alertReducer";

let MapStateToProps=(state)=>{
    return {
        sources:state.loginReducer.ImgSrc,
        teamDate:state.loginReducer.teamDate,
        inputInfo:state.loginReducer.inputInfo,
        imgCount:state.loginReducer.imgCount,
        t:state.loginReducer.text
    }
};
const DataFillingApi=(props)=>{
    const {PreloaderAC,TeamDateChangeAC}=props;
    let {request}=useHTTP();
    useEffect(() => {
        PreloaderAC();
        let data=request("/api/getTeam","GET");
        data.then(res=>{
           PreloaderAC();
           TeamDateChangeAC (res.message)
        })
    },[PreloaderAC,TeamDateChangeAC,request]);
    let options=props.teamDate.map((e,i)=>
        <option key={i} value={e.Phone}> {e.SecondName} {e.Name}</option>
    );
    let imgSend = (e) => {
        for (let i=0;i<e.target.files.length;i++)
        PostImg(e.target.files[i]).then(res=>{
            props.ImgSrcChangeAC(res.data.data.link)
        })

    };
    let {requestObj}=useObjects();
    const sendObjectsInfo= async ()=>{
        try {

           let data= await requestObj('/api/sendObj',"POST", {...props.inputInfo});
            props.alertReducerAC()
            props.messageChangeAC(data.message)
            setTimeout(() => {
                props.alertReducerAC()
            }, 1500)
        }
        catch (e) {
            props.messageChangeAC(e.message)
            props.alertReducerAC()
            setTimeout(() => {
                props.alertReducerAC()
            }, 1500)
        }
    };
    return (
        <DataFilling ChangeInputInfoDistrictAC={props.ChangeInputInfoDistrictAC} ChangeInputInfoSizeAC={props.ChangeInputInfoSizeAC} alertReducerAC={props.alertReducerAC} sendObjectsInfo={sendObjectsInfo} imgCount={props.imgCount} ImgCountAC={props.ImgCountAC} inputInfo={props.inputInfo} ChangeInputInfoTypeAC={props.ChangeInputInfoTypeAC} ChangeInputInfoStreetAC={props.ChangeInputInfoStreetAC} ChangeInputInfoHouseAC={props.ChangeInputInfoHouseAC} ChangeInputInfoCountAppAC={props.ChangeInputInfoCountAppAC} ChangeInputInfoNameAC={props.ChangeInputInfoNameAC} ChangeInputInfoPassAC={props.ChangeInputInfoPassAC} ChangeInputInfoCostAC={props.ChangeInputInfoCostAC} ChangeInputInfoRoomsAC={props.ChangeInputInfoRoomsAC} options={options} ImgSrcClearAC={props.ImgSrcClearAC} imgSend={imgSend} sources={props.sources} />
    )
};
export const DataFillingContainer=connect(MapStateToProps,{ChangeInputInfoDistrictAC,ChangeInputInfoSizeAC,messageChangeAC,alertReducerAC,ImgCountAC,ImgSrcChangeAC,ImgSrcClearAC,PreloaderAC,TeamDateChangeAC,ChangeInputInfoTypeAC,ChangeInputInfoStreetAC,ChangeInputInfoHouseAC,ChangeInputInfoCountAppAC,ChangeInputInfoNameAC,ChangeInputInfoPassAC,ChangeInputInfoCostAC,ChangeInputInfoRoomsAC})(DataFillingApi)