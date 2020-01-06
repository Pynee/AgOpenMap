import { backupState } from "./backupState";
console.log(JSON.parse(localStorage.getItem("reduxState")), backupState);
const initialState =
  // JSON.parse(localStorage.getItem("reduxState")) ||
  backupState;

export default initialState;

let parenter = {
  apply: function(target, thisArg, argumentsList) {
    console.log(`Calculate sum: ${argumentsList}`);
    // expected output: "Calculate sum: 1,2"

    return target(argumentsList[0], argumentsList[1]) * 10;
  },
  set: (target, prop, value) => {
    console.log(target, prop, value, typeof value === "object");
    if (typeof value === "object") {
      let p = new Proxy({ parent: target }, parenter);
      Object.entries(value).map(value => {
        console.log(value, p);
        p[value[0]] = value[1];
        console.log(p);
      });
      return (target[prop] = p);
    } else {
      target[prop] = value;
      return true;
    }
  }
};

let root = new Proxy({ parent: { ...initialState } }, parenter);

console.log("Thissi:", root);

export const geoJSON = {
  "type": "FeatureCollection",
  "properties": {
    "name": "fields"
  },
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": ["Kanalantakunen"]
      },
      "geometry": {
        "type": "GeometryCollection",
        "geometries": [
          {
            "type": "Polygon",
            "properties": {
              "name": ["Boundary"]
            },
            "coordinates": [
              [
                [24.484673738479614, 61.983150092058025],
                [24.485692977905277, 61.983034179448495],
                [24.48614358901978, 61.98288298842592],
                [24.48614358901978, 61.98288298842592],
                [24.487125277519226, 61.98279731318032],
                [24.488064050674442, 61.982484848479565],
                [24.488611221313477, 61.98125511758733],
                [24.490102529525757, 61.98070575456212],
                [24.490102529525757, 61.98070575456212],
                [24.49122905731201, 61.98064023354062],
                [24.49122905731201, 61.98064023354062],
                [24.492934942245487, 61.98163815383969],
                [24.49214100837708, 61.982036304843234],
                [24.491282701492313, 61.98320048870731],
                [24.491282701492313, 61.98320048870731],
                [24.487624168396, 61.98701023417724],
                [24.485692977905277, 61.98627956592997],
                [24.485692977905277, 61.98627956592997],
                [24.485907554626465, 61.98609311674476],
                [24.485907554626465, 61.98609311674476],
                [24.484008550643924, 61.98447549621759],
                [24.484673738479614, 61.983150092058025]
              ]
            ]
          },
          {
            "type": "MultiPoint",
            "properties": {
              "name": ["Marker 1", "Marker 2"]
            },
            "coordinates": [
              [24.487, 61.9837],
              [24.484, 61.9833]
            ]
          }
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": ["Kennelinpelto"]
      },
      "geometry": {
        "type": "GeometryCollection",
        "geometries": [
          {
            "type": "MultiPolygon",
            "properties": {
              "name": ["Boundary"]
            },
            "coordinates": [
              [
                [24.484748840332035, 61.9804285492781],
                [24.485650062561035, 61.982988822220456],
                [24.487967491149906, 61.98235381394227],
                [24.487967491149906, 61.98235381394227],
                [24.48858976364136, 61.981093837725616],
                [24.491207599639896, 61.98026726504404],
                [24.49364304542542, 61.97923905799582],
                [24.49364304542542, 61.97924409831102],
                [24.491701126098636, 61.97890387516532],
                [24.490456581115726, 61.97929954172318],
                [24.488568305969242, 61.978971920098175],
                [24.488986730575565, 61.9785233247787],
                [24.484555721282963, 61.97772188525262],
                [24.484201669692997, 61.978266261564976],
                [24.483643770217896, 61.97837715184455],
                [24.483504295349125, 61.97913321118425],
                [24.48289275169373, 61.97923905799582],
                [24.4830858707428, 61.98034790726771],
                [24.484748840332035, 61.9804285492781]
              ]
            ]
          },
          {
            "type": "MultiPoint",
            "properties": {
              "name": ["Marker 1", "Marker 2"]
            },
            "coordinates": [
              [24.488, 61.98],
              [24.486, 61.978]
            ]
          }
        ]
      }
    }
  ]
};
export const topoJSON = {
  "type": "Topology",
  "objects": {
    "collection": {
      "name": "fields",
      "type": "GeometryCollection",
      "geometries": [
        {
          "type": "GeometryCollection",
          "properties": { "name": "Kanalantakunen" },
          "geometries": [
            {
              "type": "Polygon",
              "properties": { "name": "Boundary" },
              "arcs": [[0]]
            },
            {
              "type": "Point",
              "coordinates": [3820, 6435],
              "properties": { "name": "Marker 1" }
            }
          ]
        },
        {
          "type": "GeometryCollection",
          "properties": { "name": "Kennelinpelto" },
          "geometries": [
            {
              "type": "Polygon",
              "properties": { "name": "Boundary" },
              "arcs": [[1]]
            },
            {
              "type": "Point",
              "coordinates": [4750, 2452],
              "properties": { "name": "Marker 1" }
            }
          ]
        }
      ]
    }
  },
  "arcs": [
    [
      [1657, 5844],
      [948, -125],
      [419, -163],
      [913, -92],
      [873, -337],
      [509, -1323],
      [1387, -592],
      [1048, -70],
      [1586, 1074],
      [-738, 429],
      [-798, 1253],
      [-3403, 4101],
      [-1796, -787],
      [199, -200],
      [-1766, -1742],
      [619, -1426]
    ],
    [
      [1726, 2914],
      [839, 2756],
      [2155, -684],
      [579, -1356],
      [2435, -890],
      [2265, -1107],
      [0, 6],
      [-1806, -367],
      [-1158, 426],
      [-1756, -352],
      [389, -483],
      [-4121, -863],
      [-330, 586],
      [-518, 119],
      [-130, 814],
      [-569, 114],
      [180, 1194],
      [1546, 87]
    ]
  ],
  "transform": {
    "scale": [0.0000010751368868576309, 9.289277852405734e-7],
    "translate": [24.48289275169373, 61.97772188525262]
  },
  "bbox": [
    24.48289275169373,
    61.97772188525262,
    24.49364304542542,
    61.98701023417724
  ]
};
