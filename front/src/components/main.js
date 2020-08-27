import React from "react";
import "../css/App.css";
import MainSecond from "./main-components/main-second.js";
import MainThird from "./main-components/main-third.js";
import FourthContainerBlock from "./main-components/main-fourth-container";
import MainFirstContainer from "./main-components/main-first-container";
import MainFifthContainer from "./main-components/main-fifth-container";
import {AlertContainer} from "./main-components/alertMessageContainer";

const Main=React.memo(()=>{
    return (
        <div className="MainAll">
            <MainFirstContainer/>
            <MainSecond/>
            <AlertContainer/>
            <MainThird/>
            <FourthContainerBlock/>
            <MainFifthContainer/>
        </div>
    );
})

export default Main;
