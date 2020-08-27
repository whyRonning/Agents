import React from "react"
import preloader from "../Images/preloader.webp"

export let Preloader =React.memo( (props) => {
    return (
        <section className={(props.preloaderState)?"hiddenPreloader":"visiblePreloader"}>
            <img className="preloader" src={preloader} alt=""/>
            <div className="preloaderBlock"/>
        </section>
    )
});