import React, {Component} from "react";
import Main from "./components/main.js";
import Footer from "./components/footer.js";
import Preheader from "./components/preheader.js";
import { Route} from "react-router-dom";
import "./css/App.css";
import MobileMenuContainer from "./components/mobile-container"
import HeaderContainer from "./components/headder-container";
import {ObjectsContainer}from "./components/objectsContainer";
import {PreloaderContainer} from "./components/preloader-container";
import {ObjectPPContainer} from "./components/Object-components/objectPersonalPageContainer";
import {LoginContainer} from "./components/loginContainer";


class App extends Component {

    render() {
        return (
            <div>
                <div>
                    <Preheader/>
                    <HeaderContainer/>
                    <PreloaderContainer/>
                    <MobileMenuContainer />
                    <main>
                        <Route exact path="/" render={() => <Main  />}/>
                        <Route exact path='/objects' render={() => <ObjectsContainer  />}/>
                        <Route exact path='/objects/:objId' render={() => <ObjectPPContainer  />}/>
                        <Route exact path="/login" render={() => <LoginContainer  />}/>
                    </main>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default App;
