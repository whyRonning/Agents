import React from "react"
import {connect} from "react-redux";
import {alertReducerAC, messageChangeAC} from "../../store/alertReducer";
import {Form} from "./form";
import {useHTTP} from "../../store/api";

let FormApi=(props)=>{
    const {loading, request} = useHTTP();
    let submit = async (values) => {
        try {
            const data = await request("/api/message", "POST", values);
            props.alertReducerAC();
            props.messageChangeAC(data.message);
            setTimeout(() => {
                props.alertReducerAC()
            }, 1500)
        } catch (e) {
            props.alertReducerAC();
            props.messageChangeAC(e.message);
            setTimeout(() => {
                props.alertReducerAC()
            }, 1500)
        }
    }
    return(
        <Form onSubmit={submit} loading={loading}/>
    )
}
export const FormContainer = connect(null, { messageChangeAC, alertReducerAC})(FormApi)