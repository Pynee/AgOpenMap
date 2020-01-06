import fieldReducer from "../reducers/fieldReducer";

export const backupState = {
  fieldReducer: {
    geoJSON: {
      "type": "FeatureCollection",
      "properties": {
        "name": "fields"
      },
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": ["Kanalantakunen"],
            "visible": [true]
          },
          "geometry": {
            "type": "GeometryCollection",
            "geometries": [
              {
                "type": "Polygon",
                "properties": {
                  "name": ["Boundary"],
                  "visible": [true]
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
                  "name": ["Marker 1", "Marker 2"],
                  "visible": [true, true]
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
            "name": ["Kennelinpelto"],
            "visible": [true]
          },
          "geometry": {
            "type": "GeometryCollection",
            "geometries": [
              {
                "type": "Polygon",
                "properties": {
                  "name": ["Boundary"],
                  "visible": [true]
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
                  "name": ["Marker 1", "Marker 2"],
                  "visible": [true, true]
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
    },
    fieldsJSON: [
      {
        text: "Kenneli",
        data: "100",
        expanded: true,
        selected: false,
        checkable: true,
        cascade: true,
        child: [
          {
            text: "Boundary",
            area: "15 hectares",
            coordinates: [
              {
                lat: 61.9804285492781,
                lng: 24.484748840332035
              },
              {
                lat: 61.982988822220456,
                lng: 24.485650062561035
              },
              {
                lat: 61.98235381394227,
                lng: 24.487967491149906
              },
              {
                lat: 61.98235381394227,
                lng: 24.487967491149906
              },
              {
                lat: 61.981093837725616,
                lng: 24.48858976364136
              },
              {
                lat: 61.98026726504404,
                lng: 24.491207599639896
              },
              {
                lat: 61.97923905799582,
                lng: 24.49364304542542
              },
              {
                lat: 61.97924409831102,
                lng: 24.49364304542542
              },
              {
                lat: 61.97890387516532,
                lng: 24.491701126098636
              },
              {
                lat: 61.97929954172318,
                lng: 24.490456581115726
              },
              {
                lat: 61.978971920098175,
                lng: 24.488568305969242
              },
              {
                lat: 61.9785233247787,
                lng: 24.488986730575565
              },
              {
                lat: 61.97772188525262,
                lng: 24.484555721282963
              },
              {
                lat: 61.978266261564976,
                lng: 24.484201669692997
              },
              {
                lat: 61.97837715184455,
                lng: 24.483643770217896
              },
              {
                lat: 61.97913321118425,
                lng: 24.483504295349125
              },
              {
                lat: 61.97923905799582,
                lng: 24.48289275169373
              },
              {
                lat: 61.98034790726771,
                lng: 24.4830858707428
              }
            ],
            checked: false,
            id: "138e-3736",
            child: [],
            data: {},
            selected: true
          },
          {
            text: "Markers",
            data: "100",
            checked: false,
            child: [
              {
                text: "marker 1",
                checked: false,
                lat: 61.981557515028555,
                lng: 24.486014842987064,
                id: "215a-c7d8",
                child: [],
                data: {},
                selected: false
              },
              {
                text: "marker 2",
                checked: false,
                lat: 61.98103335755755,
                lng: 24.487173557281498,
                id: "86ba-9fb5",
                child: [],
                data: {},
                selected: false
              }
            ],
            id: "20ab-da01",
            selected: false,
            expanded: true
          }
        ],
        id: "4940-39e1",
        checked: false,
        indeterminate: false
      },
      {
        text: "Kanalantakunen",
        data: "Area",
        checkable: true,
        expanded: true,
        selected: false,
        child: [
          {
            text: "Boundary",
            area: "14.5 hectares",
            child: [],
            checked: false,
            id: "9eff-8d5c",
            data: {},
            selected: false
          },
          {
            text: "Markers",
            data: "test",
            child: [
              {
                lat: 61.984551087873754,
                lng: 24.486701488494873,
                text: "Marker 1",
                id: "c769-078c",
                child: [],
                data: {},
                checked: false,
                selected: false
              },
              {
                lat: 61.98244453022038,
                lng: 24.49026346206665,
                text: "Marker 2",
                id: "1742-2d79",
                child: [],
                data: {},
                checked: false,
                selected: false
              }
            ],
            id: "2950-d04a",
            selected: false,
            checked: false,
            expanded: true
          }
        ],
        id: "a5e4-6200",
        checked: false,
        indeterminate: false
      }
    ],
    clickMode: "SETFIELD",
    selected: {
      path: ["4940-39e1", "138e-3736"],
      type: "Boundary"
    }
  },
  treeReducer: [
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
  ],
  userReducer: {
    userLocation: {},
    isLoggedIn: true
  }
};
