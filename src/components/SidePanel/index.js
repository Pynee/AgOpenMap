import React, { useRef } from "react";

import Treeview from "./TreeView";
import ButtonRow from "./ButtonRow";
import {
  IonContent,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonIcon,
  IonButton,
  IonButtons
} from "@ionic/react";

const SidePanel = () => {
  const sideMenu = useRef();
  const closeSlideMenu = () => {
    document.getElementById("side-menu").style.width = "0";
    document.getElementById("menu-button").style.display = "inline";
  };

  return (
    <IonMenu
      side="start"
      menuId="sideMenu"
      contentId="main-content"
      swipeGesture={false}
      type="overlay"
      ref={sideMenu}
      class="disable-backdrop-bigscreen"
    >
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>AgOpenMap</IonTitle>
          <IonButtons slot="end">
            <IonButton
              onClick={() => {
                console.log(sideMenu);
                sideMenu.current.close();
              }}
            >
              <IonIcon size="large" name="close" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <div id="side-menu" className="side-nav">
        <div className="container">
          <Treeview {...{ checkable: true }}></Treeview>
          <div>
            <ButtonRow />
          </div>
        </div>
      </div>
    </IonMenu>
  );
};

export default SidePanel;
