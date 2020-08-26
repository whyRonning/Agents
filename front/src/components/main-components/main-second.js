import React from "react";
import "./../../css/App.css";
import Main2 from "./../../Images/Main2.jpg";
import ScrollableAnchor from "react-scrollable-anchor";
class MainSecond extends React.Component {
  render() {
    return (
        <section className="second-block">
          <ScrollableAnchor id={"about"}>
            <h2 className="whoUs">Кто мы такие?</h2>
          </ScrollableAnchor>
          <div className="secondMain">
            <div className="secondMain-textBlock">
              <h3>Мы агентство недвижимости "Антураж"</h3>
              <p className="text">
                Мы молодая и прогрессивная компания, занимающаяся продажей
                недвижимости в Уфе.
              </p>
              <p className="text">
                Наша главная цель - помощь в покупке и продаже недвижимости
                обычным людям, а также чтобы это было безопасно!!
              </p>
              <p className="text">
                Мы постоянно совершенствуемся для развития отношений на рынке
                недвижимости , путем регулирования профессиональных
                взаимоотношений на рынке недвижимости, защиты прав потребителей и
                профессиональных интересов участников рынка.
              </p>
            </div>
            <img id="Main2" src={Main2} alt="" />
          </div>
        </section>
    );
  }
}
export default MainSecond;