import React from "react"

class AlertMessage extends React.Component {
    render() {
        return (
            <div className={(this.props.isAlertVisible)?"alert alertVisible":"alert alertHidden"}>
                <div className="alert-text-block">
                    <label>{this.props.message}</label>
                </div>
            </div>
        )

    }

}

export default AlertMessage