import React from "react";
import ReactDOM from "react-dom";
import store from "./store/date";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import App from "./App";
const rerender=()=> {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App /></Provider></BrowserRouter>, document.getElementById("root")
    );
};
rerender();
store.subscribe(()=>{
    rerender()
});