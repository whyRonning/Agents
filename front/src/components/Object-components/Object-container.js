import React from "react";
import { useEffect } from "react";
import { useObjects } from "../../store/api";
import { connect } from "react-redux";
import { GetObjectsAC } from "../../store/ObjectRecucer";
import { Object } from "./Object";
import {NoneObject} from "./noneobject";
import {PreloaderAC} from "../../store/preloaderReducer";

let MapStateToProps = state => {
    return {
        currentObj: state.objReducer.CurrentObjects,
    };
};
export let ObjectBlock = props => {
    const { requestObj } = useObjects();
    const { GetObjectsAC, currentObj,PreloaderAC } = props;
    useEffect(() => {
        PreloaderAC();
        const data = requestObj("/api/objects");
        data.then(res => {
            GetObjectsAC(res.message);
            PreloaderAC()
        });

    }, [GetObjectsAC,requestObj,PreloaderAC]);
    const objBlock = currentObj.map((el, i) => (
        <Object url={el._id} key={i} size={el.size} type={el.type} countApp={el.countApp} cost={el.cost} rooms={el.rooms} district={el.district} photo={el.imgSrc} street={el.street} house={el.house} />
    ));
    if (objBlock[0]){
        return <div className='MainObjBlock'>{objBlock} </div>;
    }
    else {
        return <div className='MainObjBlock'><NoneObject/></div>;
    }

};
export let ObjectContainer = connect(
    MapStateToProps,
    { GetObjectsAC,PreloaderAC }
)(ObjectBlock);