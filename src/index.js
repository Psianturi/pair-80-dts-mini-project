import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import 'semantic-ui-css/semantic.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { createStore } from "redux";
import { Provider } from "react-redux";



const stateFilm = {
  activeItems: "beranda"
}

//Reducer

const reducerFilm = (state = stateFilm, action) => {

  console.log("actionnya", action)
  switch (action.type) {
    case "ACTIVE_ITEM":
      var stateActiveItems = { ...state, activeItems: action.ActiveItem }
      return stateActiveItems;
    default:
      return state;
  }

}

const store = createStore(reducerFilm);
console.log("store update", store.getState())

ReactDOM.render(

  <Auth0Provider
  
  domain="dev-i1w56i2y.us.auth0.com"
  clientId="rEPxzHuR0DPAHyG7WToq2XCpN3aIUuoL"
    redirectUri={window.location.origin}
  >
    <Provider store={store}>
      <Routes />
    </Provider>
  </Auth0Provider>,
  document.getElementById("root")
);