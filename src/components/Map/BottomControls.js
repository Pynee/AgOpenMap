import React from "react";
import { ZoomControl } from "react-leaflet";
import ControlPanel from "./MapControls.js";

const BottomControls = props => {
  return (
    <React.Fragment>
      <ZoomControl position="bottomright" />
      <ControlPanel className="" position="bottomright">
        {/*  <button className="button" key="b0">
          Polygon
        </button>
        <button className="button" key="b1">
          Marker
        </button> */}
      </ControlPanel>
    </React.Fragment>
  );
};

export default BottomControls;
