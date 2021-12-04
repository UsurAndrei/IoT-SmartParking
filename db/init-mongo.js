db.sensors.drop();
db.sensors.insertMany([
    {_id:0, name: "Node0"},
    {_id:1, name: "Node1"},
    {_id:2, name: "Node2"},
    {_id:3, name: "Node3"},
    {_id:4, name: "Node4"},
    {_id:5, name: "Node5"},
    {_id:6, name: "Node6"},
    {_id:7, name: "Node7"},
    {_id:8, name: "Node8"},
    {_id:9, name: "Node9"}
]);

db.data.insertMany([
    {_id:0, isAvailable: null, lat: null, lon: null},
    {_id:1, isAvailable: null, lat: null, lon: null},
    {_id:2, isAvailable: null, lat: null, lon: null},
    {_id:3, isAvailable: null, lat: null, lon: null},
    {_id:4, isAvailable: null, lat: null, lon: null},
    {_id:5, isAvailable: null, lat: null, lon: null},
    {_id:6, isAvailable: null, lat: null, lon: null},
    {_id:7, isAvailable: null, lat: null, lon: null},
    {_id:8, isAvailable: null, lat: null, lon: null},
    {_id:9, isAvailable: null, lat: null, lon: null},
]);

    
