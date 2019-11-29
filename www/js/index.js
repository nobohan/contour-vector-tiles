// import 'ol/ol.css';
// import {Map, View} from 'ol';
// import TileLayer from 'ol/layer/Tile';
// import OSM from 'ol/source/OSM';
// import TileWMS from 'ol/source/TileWMS';

// Map
const osm = new ol.layer.Tile({
    source: new ol.source.OSM(),
    title: 'OSM',
});

const ortho = new ol.layer.Tile({
    source: new ol.source.TileWMS({
        url: 'http://geoservices.wallonie.be/arcgis/services/IMAGERIE/ORTHO_2018/MapServer/WMSServer',
        params: {'LAYERS': '0', 'TILED': true},
    }),
    title: 'SPW Ortho 2018',
});

const vectorTiles = new ol.layer.VectorTile({
    source: new ol.source.VectorTile({
        format: new ol.format.MVT(),
        url: './contours/{z}/{x}/{y}',
        //projection: 'EPSG:4326'
    }),
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgba(0, 0, 0, 1)',
            width: 4
        }),
    }),
    // title: 'contours',
});


// new VectorTileLayer({
//     source: new VectorTileSource({
//       format: new MVT(),
//       url: 'https://basemaps.arcgis.com/v1/arcgis/rest/services/World_Basemap/VectorTileServer/tile/{z}/{y}/{x}.pbf'
//     })
//   })

const map = new ol.Map({
    target: 'map',
    layers: [ortho, osm, vectorTiles],
    view: new ol.View({
        center: [622124,6402800],
        //center: [5.5902,49.7103],
        zoom: 12,
        //projection: 'EPSG:4326',
    })
});
