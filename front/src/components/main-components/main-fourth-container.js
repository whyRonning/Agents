import { connect } from "react-redux";
import { GetTeamAC } from "../../store/realtorsDate";
import ScrollableAnchor from "react-scrollable-anchor";
import MainFourth from "./main-fourth";
import React,{useEffect} from "react";
import {useHTTP} from "../../store/api";
import {PreloaderAC} from "../../store/preloaderReducer";
let MapStateToProps = state => {
    return {
        realtorsDate: state.realtorsDate.teamDate
    };
};

let UsersContainer=(props)=>{
    let {request}=useHTTP();
    let {GetTeamAC,PreloaderAC}=props;
    useEffect(()=>{
        try {
            PreloaderAC()
            let data=request("/api/getTeam","GET");
            data.then((e)=>{
                GetTeamAC(e.message);
                PreloaderAC()
            });

        }
        catch(e){
            console.log(e)
        }
    },[GetTeamAC,request,PreloaderAC]);
    return (
        <section>
            <ScrollableAnchor id={"team"}>
                <h2>Наша команда</h2>
            </ScrollableAnchor>
            <div className="MainFourth">
                {props.realtorsDate.map((el, i) => (
                    <MainFourth key={i} el={el} />
                ))}
            </div>
        </section>
    );
} ;
let FourthContainerBlock = connect(MapStateToProps, {GetTeamAC,PreloaderAC})(UsersContainer);
export default FourthContainerBlock;
