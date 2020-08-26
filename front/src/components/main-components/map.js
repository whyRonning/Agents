import React from "react";
import "../../css/App.css";
import { YMaps, Map, Placemark } from "react-yandex-maps";

class Maps extends React.Component {
  render() {
    return (
      <section className="maps">
        <YMaps>
          <Map
            width="90vw"
            height="70vmin"
            defaultState={{
              center: [54.72772800194688, 55.94341294061591],
              zoom: 18
            }}
          >
            <Placemark geometry={[54.72772800194688, 55.94341294061591]} />
          </Map>
        </YMaps>
      </section>
    );
  }
}
export default Maps;
