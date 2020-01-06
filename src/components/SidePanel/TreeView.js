import React from "react";
import EyzyTree from "eyzy-tree";
import "eyzy-tree/style.css";
import Draggable from "./Draggable";
import Droppable from "./Droppable";
import { useSelector, useDispatch } from "react-redux";
import EyzyTreeApi from "eyzy-tree/api";
import InputField from "./EditField";
import createTree from "./createTree";

//import { initialState } from "../../reducers/treeReducer";
const Treeview = props => {
  const dispatch = useDispatch();
  const geoJSON = useSelector(state => state.fieldReducer.geoJSON);
  const fieldsJSON = useSelector(state => state.fieldReducer.fieldsJSON);
  console.log(fieldsJSON);
  //dispatch({ type: "SET_TREE_STATE", payload: createTree(geoJSON) });
  const treeData = useSelector(state => state.treeReducer);

  if (treeData === null) {
    console.log("creating tree...");
    dispatch({ type: "SET_TREE_STATE", payload: createTree(geoJSON) });
  }

  let api = null;

  const handleTreeReady = treeApi => {
    // it is important to pass the Basic API as an argument
    api = new EyzyTreeApi(treeApi);
  };

  const handleTreeChange = newTree => {
    dispatch({ type: "TREE_CHANGE", payload: newTree });
    return;
  };

  const handleSelect = node => {
    let selectedIDs = { path: [node.id], type: null };
    while (node.parent != null) {
      selectedIDs.type =
        node.text === "Boundary" || node.text === "Markers" ? node.text : null;
      node = node.parent;
      console.log(node);
      selectedIDs.path.unshift(node.id);
    }
    dispatch({ type: "SET_SELECTED", payload: selectedIDs });
  };

  const handleNameUpdate = e => {
    e.stopPropagation();
    console.log(e.target);
    if (e.key === "Enter" || e.type === "blur") {
      if (e.target.value !== "") {
      }
      const value = e.target.value || "Add name";
      dispatch({ type: "UPDATE_NAME", payload: value });
    }
  };

  return (
    <div className="treeview">
      <Droppable className="treeview">
        <EyzyTree
          checkable={true}
          checkboxRenderer={({ node }) => {
            return (
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id={node.id}
                  checked={node.checked}
                  readOnly
                  ref={input => {
                    if (input) {
                      input.indeterminate = node.indeterminate;
                    }
                  }}
                  className="treeview-checkbox"
                />
              </div>
            );
          }}
          textRenderer={props => {
            let parent = props.node;
            while (parent.parent != null) {
              parent = parent.parent;
            }
            if (props.node.editing) {
              return (
                <InputField
                  className="treeview-inputfield"
                  node={props.node}
                  onEditReady={handleNameUpdate}
                ></InputField>
              );
            } else {
              return (
                <Draggable className="node-content-draggable" draggable={true}>
                  <b className="node-content-text">{props.node.text} </b>
                  <div className="node-content-data">Data</div>
                </Draggable>
              );
            }
          }}
          data={fieldsJSON}
          onChange={handleTreeChange}
          onReady={handleTreeReady}
          onSelect={handleSelect}
        />
      </Droppable>
    </div>
  );
};

export default Treeview;
