import React from "react"
import preloader from "../Images/preloader.webp"

export let Preloader = (props) => {
    return (
        <section className={(props.preloaderState)?"hiddenPreloader":"visiblePreloader"}>
            <img className="preloader" src={preloader} alt=""></img>
            <div className="preloaderBlock"></div>
        </section>
    )
}