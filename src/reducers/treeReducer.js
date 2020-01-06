import produce from "immer";
export const initialState = [
  {
    text: "Kenneli",
    data: ["5 items"],
    expanded: true,
    selected: false,
    checkable: true,
    cascade: true,
    checked: true,
    indeterminate: false,
    child: [
      {
        text: "Boundary",
        data: ["15.56 hectares"],
        checked: true,
        child: [],
        selected: false
      },
      {
        text: "Markers",
        data: ["2 items"],
        checked: true,
        selected: false,
        expanded: true,
        child: [
          {
            text: "marker 1",
            checked: true,
            data: [],
            selected: false
          },
          {
            text: "marker 2",
            checked: true,
            data: [],
            selected: false
          }
        ]
      }
    ]
  },
  {
    text: "Kanalantakunen",
    data: ["5 items"],
    checkable: true,
    expanded: true,
    selected: false,
    checked: true,
    indeterminate: false,
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
        child: [
          {
            text: "Marker 1",
            data: [],
            checked: true,
            selected: false
          },
          {
            text: "Marker 2",
            data: [],
            checked: true,
            selected: false
          }
        ]
      }
    ]
  }
];

const treeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TREE_STATE":
      console.log("State: ", action.payload);
      return action.payload;
  }
  return produce(state, draftState => {
    switch (action.type) {
      case "UPDATE_TREE":
        return;
      case "ADD_NEW_FIELD":
        draftState.push(action.payload);
        return;
    }
  });
};

export default treeReducer;
