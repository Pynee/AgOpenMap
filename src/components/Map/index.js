import React, { useRef, useEffect } from "react";
import { Map as LMap, TileLayer } from "react-leaflet";
import L from "leaflet";
//import { computeArea } from "spherical-geometry-js";
import FieldElements from "./FieldElements";
import BottomControls from "./BottomControls";
import TopControls from "./TopControls";
import { useSelector, useDispatch } from "react-redux";
import { Plugins } from "@capacitor/core";
const startPosition = [61.981574, 24.484856];

const Map = props => {
  const dispatch = useDispatch();
  const { Geolocation } = Plugins;
  const clickMode = useSelector(state => state.fieldReducer.clickMode);
  const mapRef = useRef(null);
  const addMarker = e => {
    console.log("addMarker clicked");
  };
  const addPolygon = e => {
    console.log("addPolygon clicked");
  };
  const handleClick = e => {
    switch (clickMode) {
      case "SETMARKER":
        addMarker(e);
        return;
      case "SETPOLYGON":
        addPolygon(e);
        return;
      default:
        return;
    }
  };
  const watchPosition = () => {
    const wait = Geolocation.watchPosition(
      { enableHighAccuracy: true },
      (position, err) => {
        const coordinates = position;

        dispatch({
          type: "USER_UPDATE",
          payload: {
            userLocation: {
              latitude: coordinates.coords.latitude,
              longitude: coordinates.coords.longitude,
              accuracy: coordinates.coords.accuracy,
              speed: coordinates.coords.speed,
              heading: coordinates.coords.heading,
              altitude: coordinates.coords.altitude,
              altitudeAccuracy: coordinates.coords.altitudeAccuracy,
              timestamp: coordinates.timestamp
            }
          }
        });
      }
    );
  };

  useEffect(() => {
    setTimeout(() => {
      if (mapRef.current !== null) {
        mapRef.current.leafletElement.invalidateSize();
      }
    }, 800);
    watchPosition();
  }, []);

  //console.log("Area: ", computeArea(markers) / 10000, " hectares");
  return (
    <div className="leaflet-container" key="mapdiv">
      <LMap
        center={startPosition}
        zoom={16}
        onClick={handleClick}
        zoomControl={false}
        minZoom={0}
        maxZoom={22}
        renderer={L.svg({ padding: 2 })}
        ref={mapRef}
      >
        >
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
          maxNativeZoom={17}
        />
        <FieldElements />
        <TopControls />
        <BottomControls />
      </LMap>
    </div>
  );
};

export default Map;
