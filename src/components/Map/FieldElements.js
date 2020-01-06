import React from "react";
import { Marker, Polygon, Circle, GeoJSON } from "react-leaflet";
import { useSelector, useDispatch } from "react-redux";
import L from "leaflet";
import { backupState } from "../../storage/storage";

const FieldElements = () => {
  const dispatch = useDispatch();
  /*   dispatch({
    type: "SET_STATE",
    payload: backupState
  }); */
  const fieldsJSON = useSelector(state => state.fieldReducer.fieldsJSON);

  const geoJSON = useSelector(state => state.fieldReducer.geoJSON);
  const userLocation = useSelector(state => state.userReducer.userLocation);
  const pinMarker = L.icon({
    iconUrl: "pinMarker.png",
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [-3, -76]
  });
  const pinPolygon = L.icon({
    iconUrl: "pinPolygon.png",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [-3, -76]
  });

  const pointToLayer = (geoJsonPoint, latlng) => {
    console.log(geoJsonPoint);
    const marker = L.marker(latlng, {
      icon: pinMarker,
      draggable: true,
      fieldName: geoJsonPoint.properties.name,
      objectName: geoJsonPoint.geometry.properties.name,
      type: geoJsonPoint.geometry.type
    });
    marker.on("dragend", updateMarkerPosition);
    return marker;
  };
  const onEachFeature = (feature, layer) => {
    console.log("Feature: ", feature, "Layer: ", layer);
  };
  const filter = geoJsonFeature => {
    console.log("Feature: ", geoJsonFeature);
    return true;
  };
  const updateMarkerPosition = e => {
    const fieldName = e.target.options.fieldName;
    const objectName = e.target.options.objectName;
    const type = e.target.options.type;
    const newPos = Object.values(e.target.getLatLng()).reverse();
    const fieldIndex = geoJSON.features.findIndex(
      element => fieldName === element.properties.name
    );
    const objectIndex = geoJSON.features[
      fieldIndex
    ].geometry.geometries.findIndex(
      element => objectName === element.properties.name
    );
    if (type === "Polygon") {
    }
    dispatch({
      type: "UPDATE_MARKER_POSITION",
      payload: {
        indexPath: [fieldIndex, objectIndex],
        type,
        newPos
      }
    });
  };

  const updatePosition = (e, locationInfo) => {
    dispatch({
      type: "UPDATE_MARKER",
      payload: { ...locationInfo, newPosition: e.target.getLatLng() }
    });
    return;
  };

  return (
    <>
      {/*  {fieldsJSON.map((field, fieldIndex) => {
        const fieldName = field.text;
        return field.child.map(
          (fieldName => (child, childIndex) => {
            const markerType = child.text;
            switch (child.text) {
              case "Boundary":
                if (child.checked)
                  return (
                    <React.Fragment key="Boundary">
                      {child.child.map(
                        ((markerType, fieldName) => (marker, index) => {
                          return (
                            <Marker
                              position={marker}
                              icon={pinPolygon}
                              draggable={true}
                              onDragend={e =>
                                updatePosition(e, {
                                  fieldIndex: fieldIndex,
                                  childIndex: childIndex,
                                  index: index,
                                  type: markerType
                                })
                              }
                              key={
                                fieldIndex +
                                "" +
                                childIndex +
                                "" +
                                index +
                                "PolygonMarker"
                              }
                              index={index}
                              locationInfo={{
                                field: { fieldName },
                                type: { markerType },
                                index: { index }
                              }}
                            ></Marker>
                          );
                        })(markerType, fieldName, childIndex)
                      )}

                      <Polygon
                        positions={child.child}
                        key={fieldIndex + "" + childIndex + "Polygon"}
                      ></Polygon>
                    </React.Fragment>
                  );
                return null;
              case "Markers":
                return child.child.map((marker, index) => {
                  if (marker.checked)
                    return (
                      <Marker
                        position={marker}
                        icon={pinMarker}
                        draggable={true}
                        onDragend={e =>
                          updatePosition(e, {
                            fieldIndex: fieldIndex,
                            childIndex: childIndex,
                            index: index,
                            type: markerType
                          })
                        }
                        key={fieldIndex + "" + childIndex + "" + index}
                        index={index}
                      ></Marker>
                    );
                  return null;
                });

              default:
                return null;
            }
          })(fieldName)
        );
      })} */}
      <GeoJSON
        data={geoJSON}
        pointToLayer={pointToLayer}
        onEachFeature={onEachFeature}
        filter={filter}
      />
      {userLocation.latitude && userLocation.longitude && (
        <>
          <Marker
            position={{
              lat: userLocation.latitude,
              lng: userLocation.longitude
            }}
            icon={pinPolygon}
            draggable={false}
          ></Marker>
          <Circle
            center={{ lat: userLocation.latitude, lng: userLocation.longitude }}
            radius={userLocation.accuracy}
            color="#3388ff"
            opacity="2"
          ></Circle>
        </>
      )}
    </>
  );
};

export default FieldElements;
