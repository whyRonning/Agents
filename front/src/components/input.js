import React from "react"

export let Input = (props) => {
    let {input, type, className} = props;
    return (
        <>
            <input {...input} className={className} checked={props.checked} value={props.value}
                   placeholder={props.placeholder} type={type}/>
        </>
    )
}