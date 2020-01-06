import React from "react";
import ControlPanel from "./MapControls.js";
import { IonMenuButton, IonButtons, IonIcon, IonButton } from "@ionic/react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const TopControls = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  /* const openSlideMenu = () => {
    document.getElementById("side-menu").style.width = "350px";
    document.getElementById("menu-button").style.display = "none";
  }; */
  const handleLogout = () => {
    const url = process.env.REACT_APP_API_URL + "/api/user/logout";
    console.log(url);
    fetch(url)
      .then(res => {
        if (res.status == 200) {
          return res;
        } else {
          throw new Error("Error on logout???");
        }
      })
      .then(result => {
        console.log(result);
        dispatch({
          type: "USER_UPDATE",
          payload: {
            username: "",
            email: "",
            isLoggedIn: false
          }
        });
        history.push("/login");
      });
  };

  return (
    <>
      <ControlPanel position="topleft">
        <IonButtons>
          <IonMenuButton contentId="main-content" autoHide={false}>
            <IonIcon name="menu" size="large" color="light" />
          </IonMenuButton>
        </IonButtons>
      </ControlPanel>
      <ControlPanel position="topright">
        <IonButton onClick={handleLogout} color="medium">
          Logout
        </IonButton>
      </ControlPanel>
    </>
  );
};

export default TopControls;
