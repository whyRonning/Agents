import React from "react"
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {useObjects} from "../../store/api";
import {PreloaderAC} from "../../store/preloaderReducer";
import {useEffect} from "react"
import {PersonalPage} from "./objectPersonalPage";
import {ChangeSelectedImgAC, ChangeSelectedImgToZeroAC, GetObjPPAC, GetObjPPIdAC} from "../../store/ObjectRecucer";
import {NotFound} from "./NotFoundPAge";
let MapStateToProps = state => {
    return {
        currentObjectPP: state.objReducer.currentObjectPP,
        id:state.objReducer.currentObjectPPId,
        teamDate:state.objReducer.teamDate,
        selectedImg:state.objReducer.selectedImg
    };
};

 let PersonalObjPage = props => {
    const { requestObj } = useObjects();
     let src=props.match.params.objId;
    const {PreloaderAC,currentObjectPP,GetObjPPIdAC,GetObjPPAC,ChangeSelectedImgToZeroAC } = props;
    useEffect(() => {
        if (src.length===24){
            GetObjPPIdAC(src);
            PreloaderAC();
            const data = requestObj("/api/PersonalObjects","POST",{id:src});
            data.then(res => {
                GetObjPPAC(res.message);
                PreloaderAC()
            });
        }
        ChangeSelectedImgToZeroAC()
    }, [GetObjPPAC,requestObj,PreloaderAC,GetObjPPIdAC,src,ChangeSelectedImgToZeroAC]);
     let NextPhoto=()=>{
         props.ChangeSelectedImgAC(1)
     };
     let PrevPhoto=()=>{
         props.ChangeSelectedImgAC(-1)
     };
    if(src.length===24 && currentObjectPP.imgSrc){
        let miniGallery=currentObjectPP.imgSrc.map((e,i)=>
            <img key={i}  className={(props.selectedImg===i)?"selectedImg":""} src={e} alt=""/>
        );

        return(
            <PersonalPage PrevPhoto={PrevPhoto} NextPhoto={NextPhoto} selectedImg={props.selectedImg} miniGallery={miniGallery} currentObjectPP={props.currentObjectPP} />
        );
    } else{
        return(
            <NotFound />
        );
    }
};
let WithRouterObjectPP=withRouter(PersonalObjPage);
export let ObjectPPContainer=connect(MapStateToProps,{ChangeSelectedImgAC,ChangeSelectedImgToZeroAC,PreloaderAC,GetObjPPAC,GetObjPPIdAC})(WithRouterObjectPP)