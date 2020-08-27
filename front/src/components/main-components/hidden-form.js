import React from "react";
import "../../css/App.css";
import {FormContainer} from "./formContainer";

const HiddenForm=React.memo((props)=>{
    return (
        <div>
            <div className="modalForm">
                <span className="close" id="close" onClick={props.HiddenForm}>&#215;</span>
                <FormContainer messageChangeAC={props.messageChangeAC}
                               alertReducerAC={props.alertReducerAC}> </FormContainer>
            </div>
            <div onClick={props.HiddenForm} className="modal"/>
        </div>
    );
});

export default HiddenForm;
