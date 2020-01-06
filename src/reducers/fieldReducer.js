import produce, { original } from "immer";
import initialState from "../storage/storage";
/*OUT DATED
 example field{
  name:"",
  created:"",
  modified:"",
  boundary: [{lat,lng,area}],
  markers: [{name:"",lat,lng}],

 }
*/
const geoJSONPath = [
  ["geoJson", "features"],
  ["geometry", "geometries"],
  ["coordinates"]
];
const treePath = ["treeview", "child", "child"];
const fieldReducer = (state = initialState.fieldReducer, action) => {
  switch (action.type) {
    case "SET_STATE":
      return { ...action.payload };

    case "TREE_CHANGE":
      return { ...state, fieldsJSON: action.payload };

    case "ADD_FIELD":
      return Object.assign({}, state, {
        fieldsJSON: [...state.fieldsJSON, action.payload]
      });
    case "UPDATE_MARKER_POSITION":
      const { indexPath, type, newPos } = action.payload;

      return produce(state, draftState => {
        switch (indexPath.length) {
          case 2:
            draftState.geoJSON.features[indexPath[0]].geometry.geometries[
              indexPath[1]
            ].coordinates = newPos;

          default:
        }
      });

    case "UPDATE_MARKER":
      const { fieldIndex, childIndex, index, newPosition } = action.payload;
      return produce(state, draftState => {
        draftState.fieldsJSON[fieldIndex].child[childIndex].child[index].lat =
          newPosition.lat;
        draftState.fieldsJSON[fieldIndex].child[childIndex].child[index].lng =
          newPosition.lng;
      });

    case "UPDATE_NAME":
      /*       return produce(state, draftState => {
        console.log(
          original(draftState.selected.path).reduce(
            (prev, current, currentIndex) => {
              console.log(prev, current, currentIndex);
              const index = prev.findIndex(element => current === element.id);
              prev = prev[index];
            },
            original(draftState.fieldsJSON)
          )
        );   });*/
      return produce(state, draftState => {
        const index = draftState.fieldsJSON.findIndex(
          field => state.selected[0] === field.id
        );
        draftState.fieldsJSON[index].text = action.payload;
        draftState.fieldsJSON[index].editing = false;
      });
    case "UPDATE":
      return produce(state, draftState => {
        action.path.reduce((prev, curr) => {});
      });
    case "ADD_MARKER":
      return state;
    case "ADD_POLYGON":
      return state;
    case "ADD_POLYGON_VERTEX":
      return state;
    case "REMOVE_FIELD":
      return state;
    case "REMOVE_MARKER":
      return state;
    case "REMOVE_POLYGON":
      return state;
    case "REMOVE_POLYGON_VERTEX":
      return state;
    case "SET_SELECTED":
      return { ...state, selected: action.payload };
    case "SET_CLICKMODE":
      return { ...state, clickMode: action.payload };

    default:
      return state;
  }
};

export default fieldReducer;
