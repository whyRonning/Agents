import React from "react";
import "../../css/App.css";
import {FormContainer} from "./formContainer";

class HiddenForm extends React.Component {

    render() {
        return (
            <div>
                <div className="modalForm">
                    <span className="close" id="close" onClick={this.props.HiddenForm}>&#215;</span>
                    <FormContainer messageChangeAC={this.props.messageChangeAC} alertReducerAC={this.props.alertReducerAC} > </FormContainer>
                </div>
                <div onClick={this.props.HiddenForm} className="modal"></div>
            </div>
        );
    }
}

export default HiddenForm;
