import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { BrowserRouter } from "react-router-dom";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/reducers";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const store = createStore(rootReducer);

ReactDOM.render(
  <BrowserRouter basename="storymap">
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root"),
);
