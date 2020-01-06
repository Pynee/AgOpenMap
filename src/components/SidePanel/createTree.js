const createTree = geoJSON => {
  let newTree = [];
  geoJSON.features.map((feature, index) => {
    newTree.push(
      Object.assign({}, fieldTemplate, {
        title: feature.properties.name,
        children: []
      })
    );
    newTree[index].children = [null, null];
    newTree[index].children[1] = Object.assign({}, markersTempalate, {
      title: "Markers",
      children: []
    });
    feature.geometry.geometries.map(geometry => {
      switch (geometry.type) {
        case "Polygon":
          newTree[index].children[0] = Object.assign({}, boundaryTempalate, {
            title: geometry.properties.name
          });
          return null;
        case "Point":
          newTree[index].children[1].children.push(
            Object.assign({}, markerTempalate, {
              title: geometry.properties.name
            })
          );
          return null;
        default:
          return null;
      }
    });
  });
  return newTree;
};
const fieldTemplate = {
  title: "Set name",
  subtitle: "5 items",
  expanded: true,
  selected: false,
  checkable: true,
  cascade: true,
  checked: true,
  indeterminate: false
};

const boundaryTempalate = {
  title: "Boundary",
  subtitle: "15.56 hectares",
  checked: true,
  selected: false
};

const markersTempalate = {
  title: "Markers",
  subtitle: "2 items",
  checked: true,
  selected: false,
  expanded: true
};

const markerTempalate = {
  title: "Set name",
  checked: true,
  subtitle: "",
  selected: false
};

export default createTree;
