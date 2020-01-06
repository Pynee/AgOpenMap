import React from "react";

import "./App.css";
import Map from "../components/Map/";
import FileUpload from "../components/UserFileUpload";
import SidePanel from "../components/SidePanel/";
import "leaflet/dist/leaflet.css";
import { IonApp, IonContent } from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "../theme/variables.css";

const App: React.FC = () => {
  return (
    <IonApp>
      <SidePanel />
      <IonContent id="main-content"></IonContent>
      <Map></Map>
    </IonApp>
  );
};

export default App;
