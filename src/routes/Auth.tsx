import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Login.css";
import {
  IonApp,
  IonContent,
  IonToast,
  IonItem,
  IonInput,
  IonButton,
  IonToolbar,
  IonHeader,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from "@ionic/react";

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

const Auth: React.FC = props => {
  const dispatch = useDispatch();
  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [username, setUsername] = useState("");
  const [loginMode, setLoginMode] = useState(true);
  const [toastState, setToastState] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const history = useHistory();

  const handleLogin = () => {
    let url, credentials;
    if (loginMode === true) {
      url = process.env.REACT_APP_API_URL + "/api/user/login";
      credentials = {
        "email": userEmail,
        "password": userPassword
      };
    } else {
      url = process.env.REACT_APP_API_URL + "/api/user/signin";
      credentials = {
        "email": userEmail,
        "password": userPassword,
        "username": username
      };
    }
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
      .then(res => {
        console.log(res);
        if (res.status == 200) {
          return res.json();
        } else {
          if (loginMode === false) {
            throw new Error("Error creating user");
          } else {
            throw new Error("Error Logging in");
          }
        }
      })
      .then(
        result => {
          console.log(result);
          if (result.error) {
            console.error(result.error);
            setToastMessage(result.error.toString());
            setToastState(true);
          } else {
            dispatch({
              type: "USER_UPDATE",
              payload: {
                username: result.username,
                email: result.email,
                isLoggedIn: true
              }
            });
            dispatch({
              type: "SET_STATE",
              payload: result.fieldsData.fieldReducer
            });
            history.push("/");
          }
        },

        error => {
          console.error(error);
          setToastMessage(error.toString());
          setToastState(true);
        }
      );
  };

  return (
    <IonApp>
      <IonContent>
        <IonCard class="login-form">
          <IonCardHeader>
            <IonCardTitle>
              {loginMode === true ? "Login" : "SignUp"}
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonToast
              isOpen={toastState}
              onDidDismiss={() => {
                setToastState(false);
              }}
              message={toastMessage}
              duration={4000}
            ></IonToast>

            <form action="">
              <IonItem>
                <IonInput
                  onIonChange={(event: any) => {
                    setUserEmail(event.detail.value);
                  }}
                  type="email"
                  placeholder="Email"
                ></IonInput>
              </IonItem>
              {loginMode === false ? (
                <IonItem>
                  <IonInput
                    onIonChange={(event: any) => {
                      setUsername(event.detail.value);
                    }}
                    type="text"
                    placeholder="Username"
                  ></IonInput>
                </IonItem>
              ) : (
                <></>
              )}
              <IonItem>
                <IonInput
                  onIonChange={(event: any) => {
                    setUserPassword(event.detail.value);
                  }}
                  type="password"
                  placeholder="Password"
                ></IonInput>
              </IonItem>
            </form>

            <IonButton
              onClick={() => {
                console.log(userEmail, userPassword, username);
                handleLogin();
              }}
              type="submit"
              size="default"
              color="primary"
            >
              {loginMode === true ? "Login" : "Signup"}
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
      <IonHeader>
        <IonToolbar text-center>
          {loginMode === true
            ? "No account yet? Create account!! "
            : "If you have account already then "}
          <IonButton
            size="small"
            onClick={() => {
              setLoginMode(!loginMode);
            }}
          >
            {loginMode === true ? "SignUp" : "Login"}
          </IonButton>
        </IonToolbar>
      </IonHeader>
    </IonApp>
  );
};

export default Auth;
