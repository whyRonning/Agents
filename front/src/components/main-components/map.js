import React from "react";
import "../../css/App.css";
import {Map, Placemark, YMaps} from "react-yandex-maps";

const Maps=React.memo(()=>{
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
                    <Placemark geometry={[54.72772800194688, 55.94341294061591]}/>
                </Map>
            </YMaps>
        </section>
    );
});

export default Maps;
