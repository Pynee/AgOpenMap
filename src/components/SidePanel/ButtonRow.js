import React from "react";
import { useDispatch } from "react-redux";
import Button from "./Button";

const ButtonRow = () => {
  const dispatch = useDispatch();
  const addBoundaryMode = e => {
    console.log("AddBoundaryMode clicked");
    dispatch({
      type: "ADD_BOUNDARY",
      payload: {
        text: "Set name",
        data: "",
        editing: true,
        expanded: true,
        selected: false,
        checkable: true,
        cascade: true,
        child: [],
        checked: true,
        indeterminate: false
      }
    });
    dispatch({
      type: "SET_CLICKMODE",
      payload: "SETPOLYGON"
    });
  };
  const addMarkerMode = e => {
    console.log("AddMarkerMode clicked");
    dispatch({
      type: "ADD_MARKER",
      payload: {
        text: "Set name",
        data: "",
        editing: true,
        expanded: true,
        selected: false,
        checkable: true,
        cascade: true,
        child: [],
        checked: true,
        indeterminate: false,
        lat: 0,
        lng: 0
      }
    });
    dispatch({
      type: "SET_CLICKMODE",
      payload: "SETMARKER"
    });
  };
  const addFieldMode = e => {
    console.log("AddFieldMode clicked");
    dispatch({
      type: "ADD_FIELD",
      payload: {
        text: "Set name",
        data: "",
        editing: true,
        expanded: true,
        selected: false,
        checkable: true,
        cascade: true,
        child: [
          {
            text: "Boundary",
            data: ["14.54 hectares"],
            checked: true,
            selected: false
          },
          {
            text: "Markers",
            data: ["2 items"],
            selected: false,
            checked: true,
            expanded: true,
            child: []
          }
        ],
        checked: true,
        indeterminate: false
      }
    });

    dispatch({
      type: "SET_CLICKMODE",
      payload: "SETFIELD"
    });
  };

  return (
    <React.Fragment>
      <Button image="newField" onClick={addFieldMode}></Button>
      <Button image="newPolygon" onClick={addBoundaryMode}></Button>
      <Button image="newMarker" onClick={addMarkerMode}></Button>
    </React.Fragment>
  );
};

export default ButtonRow;
