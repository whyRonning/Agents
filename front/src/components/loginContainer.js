import React from "react"
import {connect} from "react-redux";
import {Login} from "./login";
import {useObjects, useLoginAuth} from "../store/api";
import {messageChangeAC, alertReducerAC} from "../store/alertReducer";
import {DataFillingContainer} from "./DataFillingContainer";
const LoginApi = (props) => {
    const {requestObj, loading} = useObjects();
    const {token,userId,login}=useLoginAuth();
    const loginHandler = async (values) => {
        try {
            let check = await requestObj("/api/login", "POST", values);
            login(check.token, check.userId);
        } catch (e) {
            props.alertReducerAC();
            props.messageChangeAC(e.message);
            setTimeout(() => {
                props.alertReducerAC()
            }, 1500)
        }
    };
    if (!!token && !!userId) {
            return (
                <DataFillingContainer />
            )
    } else {
        return (
             <Login onSubmit={loginHandler} loading={loading}/>
        )
    }

}
export let LoginContainer = connect(null, {
    messageChangeAC,
    alertReducerAC
})(LoginApi);
