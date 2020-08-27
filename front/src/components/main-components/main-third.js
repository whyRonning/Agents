import React from "react";
import "../../css/App.css";
import ScrollableAnchor from "react-scrollable-anchor";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faClock, faDollarSign} from "@fortawesome/free-solid-svg-icons";

const MainThird=React.memo(()=>{
  return (
      <section className="MainThirdBlock">
        <div className="MainThird-shadow">
          <ScrollableAnchor id={"adv"}>
            <h2 className="adv-h2">Преимущества работы с нами</h2>
          </ScrollableAnchor>
          <div className="MainThird">
            <div className="icon-advantage-block">
              <FontAwesomeIcon className="icon-advantage" icon={faClock}/>
              <h3 className="advantage-text">Быстро</h3>
            </div>
            <div className="icon-advantage-block rub">
              <FontAwesomeIcon className="icon-advantage dollar" icon={faDollarSign}
              />
              <h3 className="advantage-text adv-second">Эффективно</h3>
            </div>
            <div className="icon-advantage-block ">
              <FontAwesomeIcon className="icon-advantage" icon={faCheck}/>
              <h3 className="advantage-text">Надежно</h3>
            </div>
          </div>
        </div>
      </section>
  );
});

export default MainThird;
